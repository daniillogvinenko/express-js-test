export const database = {
    users: [
        {
            id: "1",
            username: "admin",
            password: "123",
            roles: ["ADMIN"],
            avatar: "https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg",
            features: {
                isArticleRatingEnabled: true,
                isCounterEnabled: true,
                isAppRedesigned: true,
            },
            jsonSettings: {
                theme: "app_dark_theme",
                isFirstVisit: false,
                settingsPageHasBeenOpened: true,
                isArticlesPageWasVisited: true,
            },
        },
        {
            id: "2",
            username: "user",
            password: "123",
            roles: ["USER"],
            avatar: "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
            features: {
                isArticleRatingEnabled: true,
                isCounterEnabled: true,
                isAppRedesigned: false,
            },
            jsonSettings: {
                theme: "app_dark_theme",
                isFirstVisit: false,
                settingsPageHasBeenOpened: true,
                isArticlesPageWasVisited: true,
            },
        },
        {
            id: "3",
            username: "manager",
            password: "123",
            roles: ["MANAGER"],
            avatar: "https://media.istockphoto.com/id/1219732757/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BC%D0%B5%D0%BD%D0%B5%D0%B4%D0%B6%D0%B5%D1%80-%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%BE%D1%80-%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D0%BD%D1%82-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80.jpg?s=170667a&w=0&k=20&c=ups-Wz0QJ6i584AoomXwi0fJljB4fCT9xakiwsUXlzI=",
            features: {
                isArticleRatingEnabled: true,
                isCounterEnabled: false,
                isAppRedesigned: false,
            },
            jsonSettings: {
                theme: "app_dark_theme",
                isFirstVisit: false,
                settingsPageHasBeenOpened: true,
                isArticlesPageWasVisited: true,
            },
        },
        {
            id: "4",
            username: "testuser",
            password: "123",
            roles: ["ADMIN"],
            avatar: "https://media.istockphoto.com/id/1219732757/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BC%D0%B5%D0%BD%D0%B5%D0%B4%D0%B6%D0%B5%D1%80-%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%BE%D1%80-%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D0%BD%D1%82-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80.jpg?s=170667a&w=0&k=20&c=ups-Wz0QJ6i584AoomXwi0fJljB4fCT9xakiwsUXlzI=",
            features: {
                isArticleRatingEnabled: false,
                isCounterEnabled: false,
                isAppRedesigned: false,
            },
            jsonSettings: {
                theme: "app_dark_theme",
                isFirstVisit: false,
                settingsPageHasBeenOpened: true,
                isArticlesPageWasVisited: true,
            },
        },
    ],
};
