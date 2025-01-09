import Page from '../components/page/Page.tsx';
import PageHeader from '../components/page/pageheader/PageHeader.tsx';
import icon from '../assets/images/tierlist/icon.png'

export default function TierlistPage(){
  return (
    <Page>
      <PageHeader page="Tier list" title="Honkai: Star Rail Tier list (January 2025)" description="The most popular tier list for Honkai: Star Rail that rates all available characters by their performance in Memory of Chaos, Pure Fiction and Apocalyptic Shadow."
                  date="05/01/2025" image={icon}/>
    </Page>
  )
}