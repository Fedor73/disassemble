import React from "react";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <h1>Тестовое задание реакт-редакс</h1>
      <p>
        Тестовое задание Написать приложение, работающее со сторонним api -
        teleport.
      </p>
      <br />
      <p> Минимальный функционал:</p>
      <ul>
        <li>Развернуть React/Redux приложение</li>
        <li>
          настроить webpack для работы (файлы скрипта, любой препроцессор -
          sass/less/postcss/stylus, изображения)
        </li>
        <li>
          настроить middleware для redux для работы с запросами - использовать
          любую (из рекомендуемых - thunk, SAGA, redux-observable)
        </li>
        <li>
          подключить библиотеку для работы с запросами - axios, superagent,
          fetch или любую другую
        </li>
        <li>подключить react-router</li>

        <li>
          Поиск города по названию и вывод списка городов на отдельной странице
        </li>
        <li>
          Вывод краткой информации о городе (название, население и т.п.) на
          отдельной странице
        </li>
      </ul>
      <br />
      <br />
      Дополнительный функционал:
      <ul>
        <li>Дополнить информацию о городе - выводить списки</li>
        <li>
          Подключить библиотеку для работы с графиками - chart.js, highcharts,
          D3.js или любую другую
        </li>
        <li>
          Реализовать вывод информации в виде графиков в отображении данных о
          городе (2 и более)
        </li>
      </ul>
    </div>
  );
};
