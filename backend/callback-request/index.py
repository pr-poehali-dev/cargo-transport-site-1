import json
import os
import smtplib
import urllib.parse
import urllib.request
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
import requests

def send_email_notification(name: str, phone: str) -> None:
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    notification_email = os.environ.get('NOTIFICATION_EMAIL', 'koroleva26.07@mail.ru')
    
    if not all([smtp_host, smtp_user, smtp_password]):
        print("Email settings not configured, skipping email notification")
        return
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка на обратный звонок от {name}'
    msg['From'] = smtp_user
    msg['To'] = notification_email
    
    html = f'''
    <html>
      <body style="font-family: Arial, sans-serif;">
        <h2 style="color: #2563eb;">Новая заявка на обратный звонок</h2>
        <p><strong>Имя:</strong> {name}</p>
        <p><strong>Телефон:</strong> <a href="tel:{phone}">{phone}</a></p>
        <hr>
        <p style="color: #666;">Получено с сайта ИВДоставка</p>
      </body>
    </html>
    '''
    
    msg.attach(MIMEText(html, 'html'))
    
    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
    
    print(f"Email notification sent to {notification_email}")

def send_telegram_notification(name: str, phone: str) -> None:
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN', '7878655833:AAHke8YRZCr0m8iPijx9hITx4uUfYTmCSao')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID', '7757580483')
    
    message = f"🔔 <b>Новая заявка на обратный звонок</b>\n\n👤 <b>Имя:</b> {name}\n📱 <b>Телефон:</b> {phone}\n\n📍 С сайта ИВДоставка"
    
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {
        'chat_id': chat_id,
        'text': message,
        'parse_mode': 'HTML'
    }
    
    response = requests.post(url, json=payload)
    
    if response.status_code == 200:
        print(f"Telegram notification sent to chat_id: {chat_id}")
    else:
        print(f"Failed to send Telegram notification: {response.text}")

def send_whatsapp_notification(name: str, phone: str) -> None:
    whatsapp_phone = os.environ.get('WHATSAPP_PHONE', '79010370963')
    
    message = f"🔔 Новая заявка на обратный звонок\n\nИмя: {name}\nТелефон: {phone}\n\nС сайта ИВДоставка"
    whatsapp_url = f"https://api.whatsapp.com/send?phone={whatsapp_phone}&text={urllib.parse.quote(message)}"
    
    print(f"WhatsApp notification URL: {whatsapp_url}")
    print(f"Открыть ссылку для отправки в WhatsApp: {whatsapp_url}")

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Process callback request and send notifications via email and WhatsApp
    Args: event - dict with httpMethod, body
          context - object with request_id attribute
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    name: str = body_data.get('name', '')
    phone: str = body_data.get('phone', '')
    request_type: str = body_data.get('type', 'callback')
    
    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Name and phone are required'})
        }
    
    print(f"Callback request received: {name}, {phone}, type: {request_type}")
    
    try:
        send_telegram_notification(name, phone)
    except Exception as e:
        print(f"Failed to send Telegram notification: {e}")
    
    try:
        send_email_notification(name, phone)
    except Exception as e:
        print(f"Failed to send email: {e}")
    
    try:
        send_whatsapp_notification(name, phone)
    except Exception as e:
        print(f"Failed to prepare WhatsApp notification: {e}")
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'success': True,
            'message': 'Callback request received',
            'request_id': context.request_id
        })
    }