from rest_framework import serializers


class UserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150, allow_blank=True)
    first_name = serializers.CharField(max_length=150, allow_blank=True)
    last_name = serializers.CharField(max_length=150, allow_blank=True)
    email = serializers.EmailField(allow_blank=True)
    is_staff = serializers.BooleanField(read_only=True)
    is_superuser = serializers.BooleanField(read_only=True)
    last_login = serializers.DateTimeField(read_only=True)
    date_joined = serializers.DateTimeField(read_only=True)
    bio = serializers.CharField(max_length=200)
    picture_url = serializers.URLField()
    liked_articles = serializers.PrimaryKeyRelatedField(many=True, read_only=True) #queryset=, pk_field=
    saved_articles = serializers.PrimaryKeyRelatedField(many=True, read_only=True) 

class ArticleSerializer(serializers.Serializer):
    pk = serializers.IntegerField(read_only=True)
    author = serializers.SlugRelatedField(slug_field='username', read_only=True)
    date_created = serializers.DateTimeField(read_only=True)
    comments_enabled = serializers.BooleanField(required=False)
    picture_url = serializers.URLField()
    picture_caption = serializers.CharField(max_length=200, allow_blank=True)
    title = serializers.CharField(max_length=200)
    text = serializers.CharField()

# Article serializer without text field, for displaying on homepage
class HomePageArticleSerializer(serializers.Serializer):
    pk = serializers.IntegerField(read_only=True)
    author = serializers.SlugRelatedField(slug_field='username', read_only=True)
    date_created = serializers.DateTimeField(read_only=True)
    comments_enabled = serializers.BooleanField(required=False)
    picture_url = serializers.URLField()
    picture_caption = serializers.CharField(max_length=200, allow_blank=True)
    title = serializers.CharField(max_length=200)
