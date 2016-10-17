# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shoppinglist', '0002_auto_20161013_1847'),
    ]

    operations = [
        migrations.AddField(
            model_name='shoppinglist',
            name='qty',
            field=models.DecimalField(null=True, blank=True, decimal_places=2, max_digits=6),
        ),
    ]
