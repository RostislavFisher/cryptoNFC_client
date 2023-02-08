import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Notifications from 'vue-notification'
import NotFoundPage from "../views/NotFoundPage";
Vue.use(Notifications)


Vue.use(VueRouter)
Vue.prototype.address = "warta.cz"
Vue.prototype.languageTranslations = {
  "Pages": {
    "MapOfPublications": {
      "Modal": {
        "Title": {
          "ua": "Modal",
          "ru": "Modal",
          "en": "Modal",
          "cz": "Modal",
        },
        "TypeOfProblem":{
          "ua": "Тип проблеми",
          "ru": "Тип проблемы",
          "en": "Type of the problem",
          "cz": "Typ problemu",
        },
        "Close":{
          "ua": "Закрити",
          "ru": "Закрыть",
          "en": "Close",
          "cz": "Zavřit",
        },
        "SaveChanges":{
          "ua": "Зберегти зміни",
          "ru": "Сохранить изменения",
          "en": "Save changes",
          "cz": "Uložit změny",
        },
        "Integrate":{
          "ua": "Інтегрувати",
          "ru": "Интегрировать",
          "en": "Integrate",
          "cz": "Integrovat",
        },
        "CreatePublication":{
          "ua": "Стоврити публікацію",
          "ru": "Создать публикацию",
          "en": "Create publication",
          "cz": "Výtvořit publikace",
        },
      },

    },
    "AdminPanel": {
      "Users": {
        "tabs": {
          "ListOfUsers":{
            "Title": {
              "ua": "Список користувачів",
              "ru": "Список пользователей",
              "en": "List of users",
              "cz": "Seznam uživatelu",
            }
          },
          "Statistics":{
            "Title": {
              "ua": "Статистика",
              "ru": "Статистика",
              "en": "Statistics",
              "cz": "Statistika",
            }
          },
        },
        "Title": {
          "ua": "Користувачі",
          "ru": "Пользователи",
          "en": "Users",
          "cz": "Použivateli",
        }
      },
      "Publications": {
        "tabs": {
          "VersionControl":{
            "Verify": {
              "ua": "Верифікувати",
              "ru": "Верицифировать",
              "en": "Verify",
              "cz": "Ověřit",
            },
            "CancelVerify": {
              "ua": "Відмінити",
              "ru": "Отменить",
              "en": "Cancel",
              "cz": "Zrušit",
            },
            "Edit": {
              "ua": "Змінити",
              "ru": "Изменить",
              "en": "Edit",
              "cz": "Editovat",
            },
            "Title": {
              "ua": "Контроль версії",
              "ru": "Контроль версии",
              "en": "Version control",
              "cz": "Kontrolovat verz",
            }
          },
        },
        "Title": {
          "ua": "Публікації",
          "ru": "Публикации",
          "en": "Publications",
          "cz": "Publikace",
        }
      },
    },
    "Navigation":{
      "Login": {
        "ua": "Увійти",
        "ru": "Войти",
        "en": "Login",
        "cz": "Přihlásit se"
      },
      "Registration": {
        "ua": "Реєстрація",
        "ru": "Регистрация",
        "en": "Registration",
        "cz": "Registrovat se",
      },
      "Logout": {
        "ua": "Вийти",
        "ru": "Выйти",
        "en": "Logout",
        "cz": "Odhlásit se"
      },
      "Profile": {
        "ua": "Мій профіль",
        "ru": "Мой профиль",
        "en": "My profile",
        "cz": "Můj profil",
      },
      "Information": {
        "ua": "Інформація",
        "ru": "Информация",
        "en": "Information",
        "cz": "Informace",
      },
      "listOfPublications": {
        "ua": "Публікації",
        "ru": "Публикации",
        "en": "Publications",
        "cz": "Publikace",
      },
      "createPublication": {
        "ua": "Створити",
        "ru": "Создать",
        "en": "Create",
        "cz": "Vytvořit",
      },
      "AdminPanel": {
        "ua": "AdminPanel",
        "ru": "AdminPanel",
        "en": "AdminPanel",
        "cz": "AdminPanel",
      },
    },
    "Footer": {
      "MobileApplication": {
        "ua": "Наш мобільний додаток",
        "ru": "Наше мобильное приложение",
        "en": "Our mobile app",
        "cz": "Našé mobilní aplikace",
      },
      "Download": {
        "ua": "Завантажити",
        "ru": "Скачать",
        "en": "Download",
        "cz": "Stáhnout",
      },
      "OurSocialMedia": {
        "ua": "Наші соціальні мережі",
        "ru": "Наши социальные сети",
        "en": "Our social medias",
        "cz": "Naše sociální sítě",
      },
      "OurDonations": {
        "ua": "Донати",
        "ru": "Донаты",
        "en": "Donations",
        "cz": "Darování",
      },
      "TechSupport": {
        "ua": "Технічна підтримка",
        "ru": "Техническая поддержка",
        "en": "Technical support",
        "cz": "Technická podpora",
      },
      "RecommendedResources": {
        "ua": "Рекомендовано",
        "ru": "Рекомендованное",
        "en": "Recommended",
        "cz": "Doporučené",
      },
      "RecommendedResourcesList": {
        "ua": {
          "PCDC": {
            "Title": "PCDC",
            "icon": "<a type=\"button\" class=\"btn btn-primary btn-circle border-white btn-floating\" href=\"https://praguedatacongress.com/\">\n" +
                "              <img src=\"https://praguedatacongress.com/old/images/Logo%20PCDC%20Cerne.png\" width=\"20px\">\n" +
                "            </a>"
          },
          "Hmarochos": {
            "Title": "Хмарочос",
            "icon": "<a type=\"button\" class=\"btn btn-primary btn-circle border-white btn-floating\" href=\"https://hmarochos.kiev.ua/\">\n" +
                "              <img src=\"/media/hmarochos.png\" width=\"20px\">\n" +
                "            </a>"
          },
          "Chaplinsky": {
            "Title": "Чаплінський",
            "icon": "<a type=\"button\" class=\"btn btn-primary btn-circle border-white btn-floating\" href=\"https://www.youtube.com/channel/UCgF1bBmCdBIiL-3C29CVtxg\">\n" +
                "            <img src=\"/media/chaplinsky.png\" width=\"20px\">\n"
          },
        },
        "ru": {
          "PCDC": {
            "Title": "PCDC",
            "icon": "<a type=\"button\" class=\"btn btn-primary btn-circle border-white btn-floating\" href=\"https://praguedatacongress.com/\">\n" +
                "              <img src=\"https://praguedatacongress.com/old/images/Logo%20PCDC%20Cerne.png\" width=\"20px\">\n" +
                "            </a>"
          },
          "Hmarochos": {
            "Title": "Hmarochos",
            "icon": "<a type=\"button\" class=\"btn btn-primary btn-circle border-white btn-floating\" href=\"https://hmarochos.kiev.ua/\">\n" +
                "              <img src=\"/media/hmarochos.png\" width=\"20px\">\n" +
                "            </a>"
          },
          "Chaplinsky": {
            "Title": "Chaplinsky",
            "icon": "<a type=\"button\" class=\"btn btn-primary btn-circle border-white btn-floating\" href=\"https://www.youtube.com/channel/UCgF1bBmCdBIiL-3C29CVtxg\">\n" +
                "            <img src=\"/media/chaplinsky.png\" width=\"20px\">\n"
          },
        },
        "en": {
          "PCDC": {
            "Title": "PCDC",
            "icon": "<a type=\"button\" class=\"btn btn-primary btn-circle border-white btn-floating\" href=\"https://praguedatacongress.com/\">\n" +
                "              <img src=\"https://praguedatacongress.com/old/images/Logo%20PCDC%20Cerne.png\" width=\"20px\">\n" +
                "            </a>"
          },
          "Hmarochos": {
            "Title": "Hmarochos",
            "icon": "<a type=\"button\" class=\"btn btn-primary btn-circle border-white btn-floating\" href=\"https://hmarochos.kiev.ua/\">\n" +
                "              <img src=\"/media/hmarochos.png\" width=\"20px\">\n" +
                "            </a>"
          },
          "Chaplinsky": {
            "Title": "Chaplinsky",
            "icon": "<a type=\"button\" class=\"btn btn-primary btn-circle border-white btn-floating\" href=\"https://www.youtube.com/channel/UCgF1bBmCdBIiL-3C29CVtxg\">\n" +
                "            <img src=\"/media/chaplinsky.png\" width=\"20px\">\n"
          },
        },
        "cz": {
          "PCDC": {
            "Title": "PCDC",
            "icon": "<a type=\"button\" class=\"btn btn-primary btn-circle border-white btn-floating\" href=\"https://praguedatacongress.com/\">\n" +
                "              <img src=\"https://praguedatacongress.com/old/images/Logo%20PCDC%20Cerne.png\" width=\"20px\">\n" +
                "            </a>"
          },
          "Hmarochos": {
            "Title": "Хмарочос",
            "icon": "<a type=\"button\" class=\"btn btn-primary btn-circle border-white btn-floating\" href=\"https://hmarochos.kiev.ua/\">\n" +
                "              <img src=\"/media/hmarochos.png\" width=\"20px\">\n" +
                "            </a>"
          },
          "Chaplinsky": {
            "Title": "Чаплінський",
            "icon": "<a type=\"button\" class=\"btn btn-primary btn-circle border-white btn-floating\" href=\"https://www.youtube.com/channel/UCgF1bBmCdBIiL-3C29CVtxg\">\n" +
                "            <img src=\"/media/chaplinsky.png\" width=\"20px\">\n"
          },
        },
      },
      "DonationList": {
        "ua": {
          "Streamlabs": {
            "Title": "Streamlabs",
            "href": "https://streamlabs.com/uk-ua/",
            "icon": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/qqdv04say3errkpa2f1j"
          },
          "Diaka": {
            "Title": "Diaka",
            "href": "https://rostyslav-fisher.diaka.ua/donate",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png"
          },
          "Paypal": {
            "Title": "Paypal",
            "href": "https://www.paypal.com/donate/?hosted_button_id=N4BJ2BKS26SMW",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
          },
        },
        "ru": {
          "Streamlabs": {
            "Title": "Streamlabs",
            "href": "https://streamlabs.com/uk-ua/",
            "icon": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/qqdv04say3errkpa2f1j"
          },
          "Diaka": {
            "Title": "Diaka",
            "href": "https://rostyslav-fisher.diaka.ua/donate",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png"
          },
          "Paypal": {
            "Title": "Paypal",
            "href": "https://www.paypal.com/donate/?hosted_button_id=N4BJ2BKS26SMW",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
          },
        },
        "en": {
          "Streamlabs": {
            "Title": "Streamlabs",
            "href": "https://streamlabs.com/uk-ua/",
            "icon": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/qqdv04say3errkpa2f1j"
          },
          "Diaka": {
            "Title": "Diaka",
            "href": "https://rostyslav-fisher.diaka.ua/donate",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png"
          },
          "Paypal": {
            "Title": "Paypal",
            "href": "https://www.paypal.com/donate/?hosted_button_id=N4BJ2BKS26SMW",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
          },
        },
        "cz": {
          "Streamlabs": {
            "Title": "Streamlabs",
            "href": "https://streamlabs.com/uk-ua/",
            "icon": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/qqdv04say3errkpa2f1j"
          },
          "Diaka": {
            "Title": "Diaka",
            "href": "https://rostyslav-fisher.diaka.ua/donate",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png"
          },
          "Paypal": {
            "Title": "Paypal",
            "href": "https://www.paypal.com/donate/?hosted_button_id=N4BJ2BKS26SMW",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
          },
        },
      }
    },
    "Login": {
      "username": {
        "ua": "Прізвисько",
        "ru": "Имя пользователя",
        "en": "Username",
        "cz": "Uživatelské jméno",
      },
      "password": {
        "ua": "Пароль",
        "ru": "Пароль",
        "en": "Password",
        "cz": "Heslo",
      },
      "submit": {
        "ua": "Увійти",
        "ru": "Войти",
        "en": "Login",
        "cz": "Přihlásit se",
      },
      "Error": {
        "ua": "Помилка",
        "ru": "Ошибка",
        "en": "Error",
        "cz": "Chyba",
      },
      "WrongData": {
        "ua": "Невірні дані!",
        "ru": "Неправильные данные!",
        "en": "Wrong data!",
        "cz": "Nesprávná data",
      },
    },
    "Registration": {
      "Error": {
        "ua": "Помилка",
        "ru": "Ошибка",
        "en": "Error",
        "cz": "Chyba",
      },
      "WrongData": {
        "ua": "Невірні дані!",
        "ru": "Неправильные данные!",
        "en": "Wrong data!",
        "cz": "Nesprávná data",
      },
      "UserAlreadyExists": {
        "ua": "Користувач вже існує",
        "ru": "Пользователь уже существует",
        "en": "User already exists",
        "cz": "Uživatel už registrován",
      },
      "UserHasBeenCreated": {
        "ua": "Користувач зареєстрован!",
        "ru": "Пользователь зарегестрирован!",
        "en": "User has been created",
        "cz": "Uživatel je registrován",
      },
      "Login": {
        "ua": "Увійдіть в нього!",
        "ru": "Войдите в него!",
        "en": "Login in to it",
        "cz": "Přihlásté se do uživatele",
      },
      "username": {
        "ua": "Прізвисько",
        "ru": "Имя пользователя",
        "en": "Username",
        "cz": "Uživatelské jméno",
      },
      "password": {
        "ua": "Пароль",
        "ru": "Пароль",
        "en": "Password",
        "cz": "Heslo",
      },
      "email": {
        "ua": "Електронна пошта",
        "ru": "Електронная почта",
        "en": "Email",
        "cz": "Email",
      },
      "submit": {
        "ua":"Зареєструватися",
        "ru": "Зарегестрироваться",
        "en": "Submit",
        "cz": "Registrirovat se",
      },
    },
    "PublicationInput":{
      "Upload": {
        "ua": "Завантажити",
        "ru": "Загрузить",
        "en": "Upload",
        "cz": "Nahrát",
      },
      "PointOnTheMap": {
        "ua": "Точка на карті",
        "ru": "",
        "en": "",
        "cz": "",
      },
      "Edit": {
        "ua": "Змінити",
        "ru": "Изменить",
        "en": "Edit",
        "cz": "Editovat",
      },
      "Save": {
        "ua": "Зберегти",
        "ru": "Сохранить",
        "en": "Save",
        "cz": "Uložit",
      },
      "TitleUA": {
        "ua":"Назва українською",
        "ru":"Название на украинском",
        "en":"Ukrainian title",
        "cz":"Ukrajinský název",
      },
      "TitleRU": {
        "ua": "Назва російською",
        "ru": "Название на русском",
        "en": "Russian title",
        "cz": "Ruský název",
      },
      "TitleEN": {
        "ua": "Назва англійською",
        "ru": "Название на английском",
        "en": "English title",
        "cz": "Anglický název",
      },
      "TitleCZ": {
        "ua": "Назва чеською",
        "ru": "Название на чешском",
        "en": "Czech title",
        "cz": "Český název",
      },

    },
    "Main":{
      "KWU": {
        "ua": "Чеська Варта урбанізму",
        "ru": "Чешская Варта урбанизма",
        "en": "Czech Warta of urbanism",
        "cz": "Česká Warta urbanismu",
      },
      "slogan": {
        "ua": "У сердці Європи",
        "ru": "В сердце Европы",
        "en": "In the heart of Europe",
        "cz": "V srdci Evropy",
      },
      "sloganList": {
        "JudgmentDay": {
          "0": {
            "ua": "It will never happen to people",
            "ru": "It will never happen to people",
            "en": "It will never happen to people",
            "cz": "It will never happen to people",
          }
        },
        "0": {
          "0": {
            "ua": "З Європою у серці",
            "ru": "С Европой в сердце",
            "en": "With Europe in heart",
            "cz": "S Europou v srdci",
          },
          "1": {
            "ua": "З любов'ю Чехії з Київа",
            "ru": "С любовью Чехии из Киева",
            "en": "From Kyiv to Czechia with love",
            "cz": "S láskou Česku z Kyjiva",
          },
          "2": {
            "ua": "Разом - до перемог!",
            "ru": "Вместе - к победам",
            "en": "Together - to victory!",
            "cz": "Společně - k vítězství!",
          },
        },
        "1": {
          "0": {
            "ua": "З Європою у серці",
            "ru": "С Европой в сердце",
            "en": "With Europe in heart",
            "cz": "S Europou v srdci",
          },
          "1": {
            "ua": "З любов'ю Чехії з Київа",
            "ru": "С любовью Чехии из Киева",
            "en": "From Kyiv to Czechia with love",
            "cz": "S láskou Česku z Kyjiva",
          },
          "2": {
            "ua": "Разом - до перемог!",
            "ru": "Вместе - к победам",
            "en": "Together - to victory!",
            "cz": "Společně - k vítězství!",
          },
        },
        "2": {
          "0": {
            "ua": "🙈😁🤴😘❤👌",
            "ru": "🙈😁🤴😘❤👌",
            "en": "🙈😁🤴😘❤👌",
            "cz": "🙈😁🤴😘❤👌",
          },
          "1": {
            "ua": "Приймайте участь у житті свого міста!",
            "ru": "",
            "en": "",
            "cz": "",
          },
          "2": {
            "ua": "Робімо місто краще!",
            "ru": "",
            "en": "",
            "cz": "",
          },
        },
        "3": {
          "0": {
            "ua": "З Європою у серці",
            "ru": "С Европой в сердце",
            "en": "With Europe in heart",
            "cz": "S Europou v srdci",
          },
          "1": {
            "ua": "З любов'ю Чехії з Київа",
            "ru": "С любовью Чехии из Киева",
            "en": "From Kyiv to Czechia with love",
            "cz": "S láskou Česku z Kyjiva",
          },
          "2": {
            "ua": "Разом - до перемог!",
            "ru": "Вместе - к победам",
            "en": "Together - to victory!",
            "cz": "Společně - k vítězství!",
          },
        },
        "4": {
          "0": {
            "ua": "З Європою у серці",
            "ru": "С Европой в сердце",
            "en": "With Europe in heart",
            "cz": "S Europou v srdci",
          },
          "1": {
            "ua": "З любов'ю Чехії з Київа",
            "ru": "С любовью Чехии из Киева",
            "en": "From Kyiv to Czechia with love",
            "cz": "S láskou Česku z Kyjiva",
          },
          "2": {
            "ua": "Разом - до перемог!",
            "ru": "Вместе - к победам",
            "en": "Together - to victory!",
            "cz": "Společně - k vítězství!",
          },
        },
        "5": {
          "0": {
            "ua": "З Європою у серці",
            "ru": "С Европой в сердце",
            "en": "With Europe in heart",
            "cz": "S Europou v srdci",
          },
          "1": {
            "ua": "З любов'ю Чехії з Київа",
            "ru": "С любовью Чехии из Киева",
            "en": "From Kyiv to Czechia with love",
            "cz": "S láskou Česku z Kyjiva",
          },
          "2": {
            "ua": "Разом - до перемог!",
            "ru": "Вместе - к победам",
            "en": "Together - to victory!",
            "cz": "Společně - k vítězství!",
          },
        },
        "6": {
          "0": {
            "ua": "З Європою у серці",
            "ru": "С Европой в сердце",
            "en": "With Europe in heart",
            "cz": "S Europou v srdci",
          },
          "1": {
            "ua": "З любов'ю Чехії з Київа",
            "ru": "С любовью Чехии из Киева",
            "en": "From Kyiv to Czechia with love",
            "cz": "S láskou Česku z Kyjiva",
          },
          "2": {
            "ua": "Разом - до перемог!",
            "ru": "Вместе - к победам",
            "en": "Together - to victory!",
            "cz": "Společně - k vítězství!",
          },
        },
      },
      "LastPublication": {
        "ua": "Остані публікації",
        "ru": "Последние публикации",
        "en": "Last publications",
        "cz": "Nejnovější publikace",
      }
    },
    "About": {
      "ua": {
        "Authors": {
          "Rostyslav Fisher": {
            "img": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            "title": "Rostyslav Fisher",
            "description": [
              "• Developer",
              "• ČVUT student",
              "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-linkedin\" viewBox=\"0 0 16 16\">\n" +
              "              <path d=\"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z\"/>\n" +
              "            </svg> Rostyslav Fisher",

            ],

          }
        },
        "fragments": {
          0:{
            "Title": "Збираємо інформація з околиць міст Чехії",
            "Text": "Шукаємо міські проблеми, пропонуємо шляхи вирішення і популізуємо їх",
            "img": "https://praguemap360.com/img/0/prague-downtown-map.jpg",
          },

        }

      },
      "ru": {
        "Authors": {
          "Rostyslav Fisher": {
            "img": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            "title": "Rostyslav Fisher",
            "description": [
              "• Developer",
              "• ČVUT student",
              "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-linkedin\" viewBox=\"0 0 16 16\">\n" +
              "              <path d=\"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z\"/>\n" +
              "            </svg> Rostyslav Fisher",

            ],

          }
        },
        "fragments": {
          0:{
            "Title": "Собираем информацию из городов Чехии",
            "Text": "Ищем городские проблемы, предлагаем методы их решения и популяризуем их",
            "img": "https://praguemap360.com/img/0/prague-downtown-map.jpg",
          },

        }

      },
      "en": {
        "Authors": {
          "Rostyslav Fisher": {
            "img": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            "title": "Rostyslav Fisher",
            "description": [
              "• Developer",
              "• ČVUT student",
              "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-linkedin\" viewBox=\"0 0 16 16\">\n" +
              "              <path d=\"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z\"/>\n" +
              "            </svg> Rostyslav Fisher",

            ],

          }
        },
        "fragments": {
          0:{
            "Title": "We are looking for city problems",
            "Text": "We are looking for city problems, recommending ways to solve and popularize it",
            "img": "https://praguemap360.com/img/0/prague-downtown-map.jpg",
          },

        }

      },
      "cz": {
        "Authors": {
          "Rostyslav Fisher": {
            "img": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            "title": "Rostyslav Fisher",
            "description": [
              "• Developer",
              "• ČVUT student",
              "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-linkedin\" viewBox=\"0 0 16 16\">\n" +
              "              <path d=\"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z\"/>\n" +
              "            </svg> Rostyslav Fisher",

            ],

          }
        },
        "fragments": {
          0:{
            "Title": "Hledáme problemy měst Česka",
            "Text": "Hledáme městcké problemy, recomendujeme spůsoby vyřešit a popularizovujeme je",
            "img": "https://praguemap360.com/img/0/prague-downtown-map.jpg",
          },

        }

      },

    },
    "ListOfPublications": {
      "Title": {
        "ua": "Назва",
        "ru": "Название",
        "en": "Title",
        "cz": "Název",
      },
      "Tags": {
        "ua": "Теги",
        "ru": "Теги",
        "en": "Tags",
        "cz": "Značky",
      },
      "Edit": {
        "ua": "Змінити",
        "ru": "Изменить",
        "en": "Edit",
        "cz": "Editovat",
      },
    },
    "AbstractInput": {
      "Upload": {
        "ua": "Завантажити",
        "ru": "Загрузить",
        "en": "Upload",
        "cz": "Nahrát",
      },
      "PointOnTheMap": {
        "ua": "Точка на карті",
        "ru": "",
        "en": "",
        "cz": "",
      },
      "Edit": {
        "ua": "Змінити",
        "ru": "Изменить",
        "en": "Edit",
        "cz": "Editovat",
      },
      "Save": {
        "ua": "Зберегти",
        "ru": "Сохранить",
        "en": "Save",
        "cz": "Uložit",
      },
      "TitleUA": {
        "ua":"Назва українською",
        "ru":"Название на украинском",
        "en":"Ukrainian title",
        "cz":"Ukrajinský název",
      },
      "TitleRU": {
        "ua": "Назва російською",
        "ru": "Название на русском",
        "en": "Russian title",
        "cz": "Ruský název",
      },
      "TitleEN": {
        "ua": "Назва англійською",
        "ru": "Название на английском",
        "en": "English title",
        "cz": "Anglický název",
      },
      "TitleCZ": {
        "ua": "Назва чеською",
        "ru": "Название на чешском",
        "en": "Czech title",
        "cz": "Český název",
      },

    },
    "VersionControl": {
      "Verificate": {
        "ua": "Верифікувати",
        "ru": "Верифицировать",
        "en": "Verify",
        "cz": "Ověřit",
      },
      "CancelVerification": {
        "ua": "Зняти верифікацію",
        "ru": "Снять верификацию",
        "en": "Cancel verification",
        "cz": "Zrušit ověření"
      },
    },
    "MyAccount": {
      "Profile": {
        "ua": "Профіль",
        "ru": "Профиль",
        "en": "Profile",
        "cz": "Profil",
      },
      "LastVisit": {
        "ua": "Останнє відвідування",
        "ru": "Последнее посещение",
        "en": "Last visit",
        "cz": "Poslední návštěva",
      },
      "UserRole": {
        "ua": "Роль користувача",
        "ru": "Роль пользователя",
        "en": "Role",
        "cz": "Uživatelská role",
      },
      "rols":{
        "Admin": {
          "ua": "Адмін",
          "ru": "Админ",
          "en": "Admin",
          "cz": "Admin",
        },
        "Moderator": {
          "ua": "Модератор",
          "ru": "Модератор",
          "en": "Moderator",
          "cz": "Moderator",
        },
        "User": {
          "ua": "Користувач",
          "ru": "Пользователь",
          "en": "User",
          "cz": "Použivatel",
        },
      }
    },
    "PublicationPage":{
      "NFT": {
        "MetaMaskNotFound": {
          "title": {
            "ua": "Помилка!",
            "en": "Помилка!",
            "cz": "Помилка!",
            "ru": "Помилка!",
          },
          "text": {
            "ua": "Metamask незнайдено",
            "en": "Metamask незнайдено",
            "cz": "Metamask незнайдено",
            "ru": "Metamask незнайдено",
          },
        },
        "NFTCreationSuccess": {
          "title": {
            "ua": "NFT створене",
            "en": "NFT створене",
            "cz": "NFT створене",
            "ru": "NFT створене",
          },
          "text": {
            "ua": "Очікуйте NFT на opensea",
            "en": "Очікуйте NFT на opensea",
            "cz": "Очікуйте NFT на opensea",
            "ru": "Очікуйте NFT на opensea",
          }
        },
        "NFTCreationRejected": {
          "title": {
            "ua": "Відміна!",
            "en": "Відміна!",
            "cz": "Відміна!",
            "ru": "Відміна!",
          },
          "text": {
            "ua": "Відміна транзакції",
            "en": "Відміна транзакції",
            "cz": "Відміна транзакції",
            "ru": "Відміна транзакції",
          },
        },
        "NFTCreationError": {
          "title": {
            "ua": "Помилка!",
            "en": "Помилка!",
            "cz": "Помилка!",
            "ru": "Помилка!",
          },
          "text": {
            "ua": "Перевірте metamask",
            "en": "Перевірте metamask",
            "cz": "Перевірте metamask",
            "ru": "Перевірте metamask",
          },
        },
        "ActivateMetaMask": {
          "ua": "Активируйте metamask",
          "en": "Activate your metamask",
          "ru": "Активируйте metamask",
          "cz": "Aktivujte metamask",
        },
      },
      "ShortDescription": {
        "ua": "Короткий опис",
        "ru": "Короткое описание",
        "en": "Short description",
        "cz": "Stručný popis",
      },
      "Description": {
        "ua": "Опис",
        "ru": "Описание",
        "en": "Description",
        "cz": "Popis",
      },
      "Tags": {
        "ua": "Теги",
        "ru": "Теги",
        "en": "Tags",
        "cz": "Značky",
      },
      "Brochure1": {
        "ua": "Буклет",
        "ru": "Буклет",
        "en": "Brochure",
        "cz": "Brožur",
      },
      "Brochure2": {
        "ua": "Буклет",
        "ru": "Буклет",
        "en": "Brochure",
        "cz": "Brožur",
      },
      "CreateNFT": {
        "ua": "Стоврити NFT",
        "ru": "Создать NFT",
        "en": "Create NFT",
        "cz": "Vytvořit NFT",
      },
      "SeeNFT": {
        "ua": "NFT",
        "ru": "NFT",
        "en": "NFT",
        "cz": "NFT",
      },
      "GenerateNFTByUser":{
        "ua": "Згенерувати (за рахунок юзера)",
        "ru": "Генерировать (за счет юзера)",
        "en": "Generate (for user's money)",
        "cz": "Vytvořit (za peníze použivatele)",
      },
      "GenerateNFTByServer":{
        "ua": "Згенерувати (за рахунок сервера)",
        "ru": "Генерировать (за счет сервера)",
        "en": "Generate (for server's money)",
        "cz": "Vytvořit (za peníze servera)",
      },
      "Error": {
        "ua": "Помилка",
        "ru": "Ошибка",
        "en": "Error",
        "cz": "Chyba",
      },
      "ChangeLanguage": {
        "ua": "Змініть мову",
        "ru": "Измените язык",
        "en": "Change your language",
        "cz": "Změňte jazýk",
      },

    },
    "NotFoundPage":{
      "ThisPageDoesNotExist":{
        "ua": "Ця сторінка не існує",
        "ru": "Эта страница не существует",
        "en": "This page does not exist",
        "cz": "Tahle stránka neexistuje",
      },
      "Main":{
        "ua": "На головну",
        "ru": "На главную",
        "en": "To the main page",
        "cz": "Na hlávní stránku",
      },
    },
  },
}
function beforeEnter(to, from, next){

  if (
      [new RegExp(`^/ua$`)
          .test(to.path),
        new RegExp(`^/ua/`)
            .test(to.path),
        new RegExp(`^/ru$`)
            .test(to.path),
        new RegExp(`^/ru/`)
            .test(to.path),
        new RegExp(`^/en$`)
            .test(to.path),
        new RegExp(`^/en/`)
            .test(to.path),
        new RegExp(`^/cz$`)
            .test(to.path),
        new RegExp(`^/cz/`)
            .test(to.path),

      ].includes(true)

  )
  {
    next();
  } else {
    next({path: `ua${to.path}`})
  }
}
Vue.mixin({
  beforeRouteEnter: beforeEnter
})
const routes = [
  // { path: '/', redirect:  `/cz/`},
  { name:"404", path: '/404', component: () => import('../views/NotFoundPage.vue') },

  {
    path: '404',
    name: 'lang404',
    component: NotFoundPage
},

  {
    path: '/:lang/404',
    name: '404',
    component: NotFoundPage
},
  {
    path: '/:lang/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:lang/Account',
    name: 'Account',

    component: () => import('../views/Account.vue')
  },
  {
    path: '/:lang/user/:userID/',
    name: 'user',

    component: () => import('../views/user.vue')
  },
  {
    path: '/:lang/Login',
    name: 'Login',

    component: () => import('../views/Login.vue')
  },
  {
    path: '/:lang/Register',
    name: 'Register',

    component: () => import('../views/Register.vue')
  },
  {
    path: '/:lang/payPage/',
    name: 'payPage',
    component: () => import('../views/PayPage.vue'),
  },
  { path: '*',
    beforeEnter: () => {
      if(["UA", "RU", "EN", "CZ"].includes(navigator.language.split("-")[1])){
        window.location.href = `/${navigator.language.split("-")[1].toLowerCase()}/404`
      }
      else{
        window.location.href = `/404`

      }
      // window.location.href = '/404';
    }

  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to, from, next)=>{
  console.log("HERE")
  if (
      [new RegExp(`^/ua$`)
          .test(to.path),
        new RegExp(`^/ua/`)
            .test(to.path),
        new RegExp(`^/ru$`)
            .test(to.path),
        new RegExp(`^/ru/`)
            .test(to.path),
        new RegExp(`^/en$`)
            .test(to.path),
        new RegExp(`^/en/`)
            .test(to.path),
        new RegExp(`^/cz$`)
            .test(to.path),
        new RegExp(`^/cz/`)
            .test(to.path),

      ].includes(true)

  )
  {
    next();
  } else {
    if(["UA", "RU", "EN", "CZ"].includes(navigator.language.split("-")[1])){
      next({path: `${navigator.language.split("-")[1].toLowerCase()}${to.path}`})
    }
    else{
      next({path: `en${to.path}`})

    }
  }
})

export default router
