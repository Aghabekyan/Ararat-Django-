from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=50)

    def __unicode__(self):
    	return self.name


    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = "Categories"


class Content(models.Model):
    title = models.CharField(max_length=200)
    desc = models.TextField()
    img = models.ImageField(upload_to='img')
    video = models.CharField(max_length=200)
    general = models.BooleanField(default=False)
    pub_date = models.DateTimeField('date published')
    create_date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User)
    category = models.ManyToManyField('Category')

    def __unicode__(self):
    	return self.title


    class Meta:
        verbose_name = 'Content'
        verbose_name_plural = "Contents"




