from django.db import models
from django.core.urlresolvers import reverse

class ShoppingList(models.Model):
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=6, decimal_places=2, blank=True, null=True,)
    created = models.DateTimeField(auto_now_add=True)
    qty = models.DecimalField(max_digits=6, decimal_places=2, blank=True, null=True,)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name