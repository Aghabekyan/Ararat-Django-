from rest_framework import serializers
from blog.models import *


class ContentSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=False, allow_blank=True, max_length=100)
    desc = serializers.CharField(required=False, allow_blank=True)
    img = serializers.CharField(required=False, allow_blank=True, max_length=100)
    video = serializers.CharField(required=False, allow_blank=True, max_length=100)
    general = serializers.BooleanField()
    pub_date = serializers.DateTimeField()
    create_date = serializers.DateTimeField()
    user_id = serializers.IntegerField(read_only=True)
    category_id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Content
        fields = ('id', 'title', 'desc', 'img', 'video', 'general', 'pub_date', 'create_date',
                  'user_id', 'category_id')
