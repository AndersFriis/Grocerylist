from django.conf.urls import include, url
from rest_framework import routers
from shoppinglist.viewsets import ShoppingListViewSet


router = routers.DefaultRouter()
router.register(r'shoppinglist', ShoppingListViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),


]





