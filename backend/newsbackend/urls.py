from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path("", views.HomePage.as_view(), name="homepage"),
    path("article/<int:primary_key>/", views.ArticleContent.as_view(), name="article"),
    path("category/<slug:category>/", views.CategoryPage.as_view(), name="categorypage"),
    path("homepagetopstories", views.HomePageTopStories.as_view(), name="homepagetopstories"),
]

urlpatterns = format_suffix_patterns(urlpatterns)

