import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send quote request to email
    Args: event - dict with httpMethod, body
          context - object with request_id
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'POST')
    
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
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '465'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    recipient_email = os.environ.get('RECIPIENT_EMAIL')
    
    if not all([smtp_host, smtp_user, smtp_password, recipient_email]):
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Email configuration missing'})
        }
    
    cargo_types = {
        'general': 'Генеральные грузы',
        'oversized': 'Негабаритные грузы',
        'fragile': 'Хрупкие грузы',
        'refrigerated': 'Рефрижераторные'
    }
    
    cargo_type_text = cargo_types.get(body_data.get('cargoType', ''), body_data.get('cargoType', 'Не указан'))
    
    email_body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2563eb;">Новая заявка на расчёт стоимости</h2>
        
        <h3>Контактные данные:</h3>
        <ul>
            <li><strong>Имя:</strong> {body_data.get('name', 'Не указано')}</li>
            <li><strong>Телефон:</strong> {body_data.get('phone', 'Не указан')}</li>
            <li><strong>Email:</strong> {body_data.get('email', 'Не указан')}</li>
        </ul>
        
        <h3>Параметры груза:</h3>
        <ul>
            <li><strong>Откуда:</strong> {body_data.get('routeFrom', 'Не указано')}</li>
            <li><strong>Куда:</strong> {body_data.get('routeTo', 'Не указано')}</li>
            <li><strong>Вес груза:</strong> {body_data.get('weight', 'Не указан')} кг</li>
            <li><strong>Расстояние:</strong> {body_data.get('distance', 'Не указано')} км</li>
            <li><strong>Тип груза:</strong> {cargo_type_text}</li>
        </ul>
        
        <h3>Дополнительная информация:</h3>
        <p>{body_data.get('comment', 'Не указана')}</p>
        
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">Заявка отправлена с сайта грузоперевозок</p>
    </body>
    </html>
    """
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f"Заявка на расчёт от {body_data.get('name', 'клиента')}"
    msg['From'] = smtp_user
    msg['To'] = recipient_email
    
    html_part = MIMEText(email_body, 'html', 'utf-8')
    msg.attach(html_part)
    
    try:
        if smtp_port == 465:
            server = smtplib.SMTP_SSL(smtp_host, smtp_port)
        else:
            server = smtplib.SMTP(smtp_host, smtp_port)
            server.starttls()
        
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
        server.quit()
        
        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': True})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)})
        }