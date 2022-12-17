import { useState } from "react";

function DialogTest(props) {
    const [showDialog, setShowDialog] = useState(false)


    return (
        <>

            <dialog open={showDialog ? 'open' : false}>
                <header>
                    <div>
                        <i onClick={e => setShowDialog(false)}>X</i>
                    </div>
                </header>
                <section>
                    corpo
                </section>
            </dialog>

            <button onClick={e => setShowDialog('open')}>Show</button>

        </>
    )
}

export default DialogTest;