# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20161120_0850'),
    ]

    operations = [
        migrations.AlterField(
            model_name='content',
            name='category',
            field=models.ManyToManyField(to='blog.Category', null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='content',
            name='pub_date',
            field=models.DateTimeField(null=True, verbose_name=b'date published', blank=True),
            preserve_default=True,
        ),
    ]
