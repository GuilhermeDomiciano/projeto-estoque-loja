import TabsComponent from '../../../components/ui/NavInterno';


const TabContent1 = () => (
  <div>
    <h2>Conteúdo da Aba 1</h2>
    <p>Este é o conteúdo da primeira aba.</p>
  </div>
);

const TabContent2 = () => (
  <div>
    <h2>Conteúdo da Aba 2</h2>
    <p>Este é o conteúdo da segunda aba.</p>
  </div>
);



const MyPage = () => {
  const tabsData = {
    "Aba 1": <TabContent1 />,
    "Aba 2": <TabContent2 />,

  };

  return <TabsComponent tabsData={tabsData} />;
};

export default MyPage;
