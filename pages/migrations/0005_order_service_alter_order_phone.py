# Generated by Django 5.1.3 on 2024-11-14 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0004_order_alter_service_maincontent_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='service',
            field=models.CharField(default='none', max_length=50),
        ),
        migrations.AlterField(
            model_name='order',
            name='phone',
            field=models.BigIntegerField(),
        ),
    ]
