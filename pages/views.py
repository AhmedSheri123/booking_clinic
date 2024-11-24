from django.shortcuts import render,get_object_or_404
from .models import Service,Order

def index(request):
    search=request.GET.get('search')
    results=Service.objects.filter()
    classesName=Service.objects.values('serviceClass').distinct()
    if search:
        results=results.filter(name__icontains=search)
    context={
        'services':Service.objects.all(),
        'classesName':classesName,
        'count':classesName.count(),
        'results':results
    }
    return render(request, 'pages/index.html',context)

def service(request,serviceName):
    service = get_object_or_404(Service,name=serviceName)
    sClasses=Service.objects.filter(name__icontains=service)
    for sClass in sClasses:
        sClass=sClass.serviceClass
    classesName=Service.objects.values('serviceClass').distinct()
    context={
        'service':service,
        'services':Service.objects.all(),
        'classesName':classesName,
        'sClass':sClass,
        'count':classesName.count(),
    }

    if request.method=='POST':
        name=request.POST.get('name')
        phone=request.POST.get('phone')
        city=request.POST.get('city')
        email=request.POST.get('email')
        msg=request.POST.get('msg')
        order=Order(name=name, service=service, phone=phone, city=city, email=email, msg=msg)
        order.save()
    return render(request, 'pages/pageService.html', context)