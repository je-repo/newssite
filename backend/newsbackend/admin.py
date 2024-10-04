from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Article, Category, User, TopStory


class ArticleAdmin(admin.ModelAdmin):
    list_display = ['pk', 'author', 'date_created', 'title']
    # Control which fields from list_display should link to the "change" page for an object
    # Setting it to all fields, except author
    linked_fields = list_display.copy()
    linked_fields.remove('author')
    list_display_links = linked_fields

    # Prefill author field as logged-in user in Article forms
    # Referenced from StackOverflow post:
    # "Django AdminForm field default value", answer by Paul Kenjora on Jan 29.2013 at 20:10
    def get_form(self, request, obj=None, **kwargs):
        form = super(ArticleAdmin, self).get_form(request, obj, **kwargs)
        form.base_fields['author'].initial = request.user
        return form

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['pk', 'abbreviation', 'name']


class TopStoryAdmin(admin.ModelAdmin):
    pass


admin.site.register(User, UserAdmin)
admin.site.register(Article, ArticleAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(TopStory, TopStoryAdmin)
