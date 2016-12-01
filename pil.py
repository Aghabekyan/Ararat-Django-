
from django.contrib.auth.models import User
from blog.models import *
from random import randint
for number in range(1, 100000):
    from django.contrib.auth.models import User
    user = User.objects.get(pk=1)
    cat = Category.objects.get(pk=randint(4, 9))
    ct = Content.objects.get(pk=randint(1, 2))
    print number
    obj = Content(
        title=ct.title,
        desc=ct.desc,
        img=ct.img,
        video=ct.video,
        general=1,
        pub_date=ct.pub_date,
        create_date=ct.create_date,
        user=user,
    )
    obj.save()
    obj.category.add(cat)
