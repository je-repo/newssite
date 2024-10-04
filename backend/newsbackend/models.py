from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone


# Best Practice: always define user model in Django, even without custom model fields.
# Custom user models registered in settings.py under AUTH_USER_MODEL = 'appname.customuser'
class User(AbstractUser):
    bio = models.CharField(max_length=200)
    picture_url = models.URLField()
    liked_articles = models.ManyToManyField("Article", related_name='users_liked') 
    saved_articles = models.ManyToManyField("Article", related_name='users_saved') 

    def __str__(self):
        return f"{self.username}"


class Article(models.Model):
    # Default author set as logged-in user in admin.py, via admin forms
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='articles')
    date_created = models.DateTimeField(default=timezone.now)
    comments_enabled = models.BooleanField(default=None)
    category = models.ForeignKey("Category", null=True, on_delete=models.SET_NULL, related_name='articles')
    picture_url = models.URLField()
    picture_caption = models.CharField(max_length=100, blank=True)
    title = models.CharField(max_length=200, unique=True) 
    subheadline = models.TextField(max_length=150, blank=True)
    text = models.TextField()

    def __str__(self):
        return f"{self.author} - {self.title}"
    

class Category(models.Model):
    abbreviation = models.CharField(max_length=3, unique=True)
    name = models.CharField(max_length=50, unique=True)

    # Defined __str__, to format categories in admin article creation dropdown
    def __str__(self):
        return f"{self.abbreviation} - {self.name}"

    class Meta:
        verbose_name_plural = "Categories"


class TopStory(models.Model):
    # Number of standbys arbitrary
    TOP_STORY_SIZES = {
        ("S1", "Small 1"),
        ("S2", "Small 2"),
        ("L", "Large"),
        ("SB1", "Standby 1"),
        ("SB2", "Standby 2"),
        ("SB3", "Standby 3"),
    }
    
    article = models.ForeignKey(Article, null=True, on_delete=models.SET_NULL, related_name='top_stories')
    size = models.CharField(max_length=3, choices=TOP_STORY_SIZES, unique=True)
    
    def __str__(self):
        return f"{self.size} - {self.article}"
    
    class Meta:
        verbose_name_plural = "TopStories"

