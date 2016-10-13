from django.db import models
from django.core.urlresolvers import reverse

class ShoppingList(models.Model):
    name = models.CharField(max_length=50)
    price = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name