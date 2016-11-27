# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20161120_0845'),
    ]

    operations = [
        migrations.AlterField(
            model_name='content',
            name='img',
            field=models.ImageField(upload_to=b'img'),
        ),
    ]
