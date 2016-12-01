from django.conf.urls import patterns, include, url
from blog.api.views import ContentViewSet


content_list = ContentViewSet.as_view({'get': 'list'})
content_item = ContentViewSet.as_view({'get': 'retrieve'})

urlpatterns = [
    url(r'^contents/$', content_list),
    url(r'^contents/(?P<pk>\d+)/$', content_item),
]
