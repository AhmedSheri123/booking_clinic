from django.db import models
from tinymce.models import HTMLField

class Service(models.Model):
    name=models.CharField(max_length=50)
    serviceClass=models.CharField(max_length=50,default='Delete this and write the class of this service')
    shortContent=models.TextField()
    mainContent=HTMLField()
    img=models.ImageField(upload_to='imgs/%Y/%m/%d/')
    isActaive=models.BooleanField(default=True)
    def __str__(self):
        return self.name
    
class Order(models.Model):
    name=models.CharField(max_length=50)
    service=models.ForeignKey(Service, on_delete=models.CASCADE)
    phone=models.BigIntegerField()
    city=models.CharField(max_length=30)
    email=models.EmailField(max_length=75)
    msg=models.TextField()
    def __str__(self):
        return self.name