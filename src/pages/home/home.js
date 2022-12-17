import ContainerContext from "../../components/context/container-context";
import DialogTest from "../../components/exemplos/dialog-test";
import RadioTest from "../../components/exemplos/radio-test";
import SelectTest from "../../components/exemplos/select-test";
import SelectTestApi from "../../components/exemplos/select-test-api";
import AppMenu from "../../components/menu/app-menu";
function Home() {
    
    return (
        <div>
            <AppMenu></AppMenu>
            {/* <ContainerContext></ContainerContext>  */}

            {/* <SelectTest></SelectTest>
            <RadioTest></RadioTest> */}

            {/* <SelectTestApi></SelectTestApi> */}

           <DialogTest></DialogTest>

        </div>
    );
}

export default Home;