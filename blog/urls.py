from django.conf.urls import patterns, url

from blog import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
    url(r'category/(?P<cat_id>\d+)/^$', views.category, name='category'),
)