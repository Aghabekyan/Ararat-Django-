from rest_framework import serializers
from blog.models import *


print repr(serializers.ModelSerializer)


class CategorySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=False, allow_blank=True, max_length=100)

    class Meta:
        model = Category
        fields = ('id', 'name')


class ContentSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=False, allow_blank=True, max_length=100)
    desc = serializers.CharField(required=False, allow_blank=True)
    img = serializers.CharField(required=False, allow_blank=True, max_length=100)
    video = serializers.CharField(required=False, allow_blank=True, max_length=100)
    general = serializers.BooleanField()
    date = serializers.DateTimeField(format='%d/%m/%Y %H:%M', source='pub_date')
    create_date = serializers.DateTimeField()
    user_id = serializers.IntegerField(read_only=True)
    category = CategorySerializer(many=True)
    # category_id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Content
        fields = ('id', 'title', 'desc', 'img', 'video', 'general', 'date', 'create_date',
                  'user_id', 'category')
