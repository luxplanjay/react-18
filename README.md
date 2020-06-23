# react-18

- [Жизненный цикл компонент-классов](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- Методы жизненного цикла.
- Сохранение коллекции заметок в localStorage (componentDidMount и
  componentDidUpdate)
- Модальное окно (componentDidMount и componentWillUnmount)
  - Проблема z-index, как решать без костылей (порталы)
  - Слушатель на keydown для Escape
  - Слушатель на клик по Backdrop
- Таймер и утечка памяти с setState() без componentWillUnmount
- Табы (shouldComponentUpdate)
  - аналогия с колорпикером = главное знать технику
  - убираем лишние рендеры после setState
- Рефакторим заметки
  - Выносим туду в отдельный компонент
  - Кнопка-иконка и импорт SVG как ReactComponent
  - Убираем редактор в модальное окно
