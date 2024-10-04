from newsbackend.models import Article, Category, TopStory
from newsbackend.serializers import ArticleSerializer, HomePageArticleSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class ArticleContent(APIView):
    """
    Load article.
    """
    def get(self, request, format=None, primary_key=None):
        
        # check, if article exists.
        # try/except is faster and more appropriate than if statement, per online research.
        try:
            article = Article.objects.get(pk=primary_key)
        except:
            return Response({"error": "Article Not Found."}, status=status.HTTP_200_OK)

        # Serialize article object into native Python datatypes
        article_serializer = ArticleSerializer(article)
            
        # Put article- and comment data into one variable
        article_page = {"article": article_serializer.data}

        return Response(article_page, status=status.HTTP_200_OK)


class CategoryPage(APIView):
    """
    Load category title and respective article previews. 
    Latter includes article title, picture (and preview text).
    """
    def get(self, request, format=None, category=None):

        # replace dash with space for rendering on page
        category = category.replace("-", " ")

        # check, if category exists
        if not Category.objects.filter(name__iexact=category).exists():
            return Response({f"{category}": f"{category} doesn't seem to exist."}, status=status.HTTP_200_OK)
                
        # check, if category articles exist
        if not Article.objects.filter(category__name__iexact=category).exists():
            return Response({f"{category}": f"No {category} articles found."}, status=status.HTTP_200_OK)

        # query and serialize category articles
        article_data = Article.objects.filter(category__name__iexact=category)
        serialized_articles = HomePageArticleSerializer(article_data, many=True)

        return Response({f"{category}": serialized_articles.data}, status=status.HTTP_200_OK)


class HomePage(APIView):
    """
    Load category titles and 3-4 article previews each. 
    Latter includes article title, picture (and preview text).
    """
    def get(self, request, format=None):

        # check, if categories exist
        if not Category.objects.all().exists():
            output = {"error": "categories not found."}
            return Response(output, status=status.HTTP_404_NOT_FOUND)

        # query for all categories and order by primary key (optional)
        categories = Category.objects.all().order_by('pk')

        # variable to store homepage data
        home_page_data = {}

        # get each category's articles, serialize and add them to home_page_data 
        for category in categories:
            # check, if category articles exist
            if Article.objects.filter(category=category.pk).exists():
                # filter for latest 4 articles
                article_objects = Article.objects.filter(category=category.pk)[:3]
                serialized_articles = HomePageArticleSerializer(article_objects, many=True)
                home_page_data[category.name] = serialized_articles.data
            else:
                # attach error message, if category articles do not exist
                home_page_data[category.name] = f"No {category.name} articles found."
        
        return Response(home_page_data, status=status.HTTP_200_OK)

    
class HomePageTopStories(APIView):
    """
    Load top stories for the top news section on the homepage.
    """
    def get(self, request, format=None):
        # check, if top stories exist
        if not TopStory.objects.all().exists():
            output = {"error": "no top story found."}
            return Response(output, status=status.HTTP_404_NOT_FOUND)
        
        topstories = TopStory.objects.all()
        
        # serialize and add top stories, with their respecting "size category" via dictionary comprehension
        topstories_dict = {story.size: HomePageArticleSerializer(story.article).data for story in topstories}

        return Response(topstories_dict, status=status.HTTP_200_OK)



