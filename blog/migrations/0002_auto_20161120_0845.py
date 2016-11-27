# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name': 'Category', 'verbose_name_plural': 'Categories'},
        ),
        migrations.AlterModelOptions(
            name='content',
            options={'verbose_name': 'Content', 'verbose_name_plural': 'Contents'},
        ),
        migrations.RenameField(
            model_name='content',
            old_name='category_rel',
            new_name='category',
        ),
    ]
