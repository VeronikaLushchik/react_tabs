import React from 'react';
import { Tabs } from './components/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Защита от темных искусств', content: '...Понимание, почему люди верят в потусторонние силы и испытывают их влияние, может спасти жизнь. Журналистка Кэрри Поппи столкнулась с “призраком”, жившим с ней под одной крышей. Дома она ощущала сдавленность в груди, зловещее предчувствие собственной смерти и постоянную слежку, слышала пугающие звуки. Когда религиозные ритуалы не помогли изгнать духа, журналистка обратилась за помощью к “охотникам за привидениями”. Но не к тем, что бегают с ультрафиолетовыми лампами в поисках эктоплазмы и демонстративно пугаются при каждом шорохе и скрипе, а к скептикам. Они предложили вызвать сотрудников газовой службы и проверить, не угарный ли газ этот злой дух: отравления монооксидом углерода как раз и вызывают беспокойные мысли, боль в груди и галлюцинации. Совет оказался своевременным. Выяснилось, что концентрация угарного газа в доме значительно превышала допустимую норму. Еще немного – и Кэрри могла умереть...' },
  { id: 'tab-2', title: 'Дементоры – фантомы и кошмары', content: '...Около четверти времени нашего сна составляет фаза быстрого сна (так называемая REM-фаза, от словосочетания rapid eye movement), которая характеризуется быстрыми движениями глаз и электрической активностью мозга, схожей с той, что наблюдается при бодрствовании. Человек, проснувшийся во время этой фазы, вероятно, скажет, что видел сны. Во время REM-фазы скелетные мышцы тела расслаблены, а моторные нейроны, посылающие им сигналы, заторможены. Именно поэтому, если нам приснится, что за нами кто-то гонится, мы побежим исключительно во сне и не свалимся с кровати. Но иногда мы пробуждаемся во время быстрого сна, а паралич пройти не успевает. Мы чувствуем, что не в состоянии пошевелиться, и наш не до конца проснувшийся мозг пытается объяснить столь непривычное ощущение, причем зачастую приходит к странным заключениям, в том числе и мистического характера. Например, он может предположить, будто наши движения сковывают демоны или призраки. Или решить, что тени на стенах – зловещие силуэты, а шум в ушах – звук крадущихся шагов. Неудачные попытки глубоко вдохнуть создают образ душителя, особенно часто – у людей, страдающих от проблем с дыханием. В отдельных случаях нехватка кислорода вызывает галлюцинации. Но не беспокойтесь: подобная встреча с воображаемой нечистью сама по себе не представляет серьезной опасности, хотя и указывает на плохое качество сна....' },
  { id: 'tab-3', title: 'Окклюменция – защита сознания', content: '...Самое тревожное, что на нашу память можно повлиять, причем даже внедрить ложные воспоминания. В одном эксперименте Элизабет Лофтус добровольцам показывали короткие фильмы про автокатастрофы и просили указать примерную скорость, с которой двигались машины, когда… – и дальше при опросе звучали разные слова, описывающие аварию, например “столкнулись” или “разбились вдребезги”[127]. Логично было ожидать, что оценки будут зависеть только от скорости, с которой на самом деле ехали машины. Но оказалось, что они больше зависели от постановки вопроса. При формулировке “разбились вдребезги” добровольцы говорили, что машины ехали быстрее. Более того, еще и “вспоминали” осколки стекла на месте аварии, хотя их в действительности не было...' },
];

interface State {
  selectedTab: Tab
}

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  chooseTab = (id: string) => {
    const chosenTab = tabs.find(tab => tab.id === id) || tabs[0];

    this.setState({ selectedTab: chosenTab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="container">
        <div className="App row justify-content-md-center">
          <h1>{`Глава: ${selectedTab.title}`}</h1>
          <Tabs
            tabs={tabs}
            selectedTabId={selectedTab.id}
            onTabSelected={this.chooseTab}
          />
        </div>
      </div>
    );
  }
}

export default App;
