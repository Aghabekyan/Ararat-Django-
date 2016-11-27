from django.contrib import admin
from blog.models import Category, Content


class ContentAdmin(admin.ModelAdmin):
    filter_horizontal = ('category',)


admin.site.register(Category)
admin.site.register(Content, ContentAdmin)
