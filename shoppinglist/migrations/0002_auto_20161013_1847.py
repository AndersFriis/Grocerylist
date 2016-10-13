# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shoppinglist', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoppinglist',
            name='price',
            field=models.DecimalField(max_digits=6, null=True, blank=True, decimal_places=2),
        ),
    ]
