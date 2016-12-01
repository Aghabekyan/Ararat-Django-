from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from blog import views

urlpatterns = patterns('',
                       # Examples:
                       # url(r'^$', 'voskanapat.views.home', name='home'),
                       # url(r'^blog/', include('blog.urls')),

                       url(r'^$', views.index, name='index'),
                       url(r'^api/', include('blog.api.urls'), name='api'),
                       url(r'^category/(?P<cat_id>\d+)/$', views.category, name='category'),
                       url(r'^article/(?P<article_id>\d+)/$', views.article, name='article'),
                       url(r'^admin/', include(admin.site.urls)),
                       )

if settings.DEBUG is True:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
