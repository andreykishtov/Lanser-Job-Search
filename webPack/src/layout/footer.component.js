class AppFooterCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;

    // Get today's date to generate the year
    this.date = new Date();
  }
}

const AppFooter = {
  controller: AppFooterCtrl,
  templateUrl: './footer.html'
};

export default AppFooter;
