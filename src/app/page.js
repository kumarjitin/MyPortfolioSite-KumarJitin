import Hero from "@/components/Hero/Hero";
import HomeSections from "@/components/Site/HomeSections";
import {SiteHeader,SiteFooter} from "@/components/Site/SiteChrome";
export default function HomePage(){return <><SiteHeader/><main id="top" tabIndex={-1}><Hero/><HomeSections/></main><SiteFooter/></>}
