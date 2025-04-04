from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactSubmission
from .serializers import ContactSubmissionSerializer

# Create your views here.

class ContactSubmissionCreateView(generics.CreateAPIView):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        # Send auto-response email
        name = serializer.validated_data['name']
        email = serializer.validated_data['email']
        
        send_mail(
            subject='Thank you for contacting QuantumFix',
            message=f'Dear {name},\n\nThank you for reaching out to us. Our team will review your message and get back to you as soon as possible.\n\nBest regards,\nThe QuantumFix Team',
            from_email=settings.DEFAULT_FROM_EMAIL if hasattr(settings, 'DEFAULT_FROM_EMAIL') else 'noreply@quantumfix.com',
            recipient_list=[email],
            fail_silently=False,
        )
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)
