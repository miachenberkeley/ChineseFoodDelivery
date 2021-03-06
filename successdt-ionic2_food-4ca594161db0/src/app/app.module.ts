import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

// import services
import {PlaceService} from '../services/place-service';
import {CollectionService} from '../services/collection-service';
import {ReviewService} from '../services/review-service';
// end import services

// import pages
import {AccountPage} from '../pages/account/account';
import {AddReviewPage} from '../pages/add-review/add-review';
import {BookmarksPage} from '../pages/bookmarks/bookmarks';
import {CollectionsPage} from '../pages/collections/collections';
import {FeedPage} from '../pages/feed/feed';
import {FiltersPage} from '../pages/filters/filters';
import {ForgotPasswordPage} from '../pages/forgot-password/forgot-password';
import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {MainTabsPage} from '../pages/main-tabs/main-tabs';
import {MapPage} from '../pages/map/map';
import {MenuPage} from '../pages/menu/menu';
import {NearbyPage} from '../pages/nearby/nearby';
import {PhotosPage} from '../pages/photos/photos';
import {PlaceDetailPage} from '../pages/place-detail/place-detail';
import {PlacesPage} from '../pages/places/places';
import {ReviewsPage} from '../pages/reviews/reviews';
import {SearchPage} from '../pages/search/search';
import {SelectLocationPage} from '../pages/select-location/select-location';
import {SignUpPage} from '../pages/sign-up/sign-up';
import {UserPage} from '../pages/user/user';
// end import pages

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    AddReviewPage,
    BookmarksPage,
    CollectionsPage,
    FeedPage,
    FiltersPage,
    ForgotPasswordPage,
    HomePage,
    LoginPage,
    MainTabsPage,
    MapPage,
    MenuPage,
    NearbyPage,
    PhotosPage,
    PlaceDetailPage,
    PlacesPage,
    ReviewsPage,
    SearchPage,
    SelectLocationPage,
    SignUpPage,
    UserPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
        platforms: {
          android: {
            tabsPlacement: 'top',
            tabsLayout: 'title-hide'
          },
          windows: {
            tabsLayout: 'title-hide'
          }
        }
      }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    AddReviewPage,
    BookmarksPage,
    CollectionsPage,
    FeedPage,
    FiltersPage,
    ForgotPasswordPage,
    HomePage,
    LoginPage,
    MainTabsPage,
    MapPage,
    MenuPage,
    NearbyPage,
    PhotosPage,
    PlaceDetailPage,
    PlacesPage,
    ReviewsPage,
    SearchPage,
    SelectLocationPage,
    SignUpPage,
    UserPage
  ],
  providers: [
    PlaceService,
    CollectionService,
    ReviewService
    /* import services */
  ]
})
export class AppModule {
}
/*
 {
 platforms: {
 android: {
 tabbarLayout: 'title-hide'
 },
 windows: {
 tabbarLayout: 'title-hide'
 }
 }
 }
 */
