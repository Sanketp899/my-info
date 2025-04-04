from django.utils.deprecation import MiddlewareMixin
from django.middleware.csrf import get_token

class SetCSRFCookieMiddleware(MiddlewareMixin):
    """
    Middleware to set the CSRF cookie for all responses.
    This ensures the frontend always has a valid CSRF token.
    """
    def process_response(self, request, response):
        # Force the CSRF cookie to be set
        get_token(request)
        return response 