from rest_framework import viewsets
from rest_framework.response import Response
from blog.models import Content
from blog.api.serializers import *


class ContentViewSet(viewsets.ViewSet):

    def list(self, request):
        queryset = Content.objects.order_by('-id').all()[:25]
        serializer = ContentSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Content.objects.get(pk=pk)
        serializer = ContentSerializer(queryset)
        return Response(serializer.data)
