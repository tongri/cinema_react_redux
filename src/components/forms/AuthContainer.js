import {SignInForm} from './SignInForm'
import {useState} from 'react'
import {MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane} from 'mdb-react-ui-kit'
import {SignUpForm} from './SignUpForm'

const AuthContainer = () => {
    const [activeTab, setActiveTab] = useState('tab1')

    const handleActivate = val => {
        if (activeTab === val) return
        setActiveTab(val)
    }
    return (
        <div className="row justify-content-center align-items-center"
        style={{ height: '90vh' }}>
            <div className="card col-md-4 col-sm-6">
                <div className="card-body">
                    <div className="row">
                        <MDBTabs className="col" fill>
                            <MDBTabsItem>
                                <MDBTabsLink active={activeTab === 'tab1'}
                                onClick={() => handleActivate('tab1')}
                                             className={activeTab === 'tab1' ? "orange lighten-1" : "orange darken-4"}>
                                    Log in
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBTabs>
                        <MDBTabs className="col" fill>
                            <MDBTabsItem>
                                <MDBTabsLink active={activeTab === 'tab2'}
                                             onClick={() => handleActivate('tab2')}
                                className={activeTab === 'tab2' ? "orange lighten-1" : "orange darken-4"}>
                                    Sign up
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBTabs>
                    </div>
                    <MDBTabsContent>
                        <MDBTabsPane show={activeTab === 'tab1'}>
                            <SignInForm />
                        </MDBTabsPane>
                        <MDBTabsPane show={activeTab === 'tab2'}>
                            <SignUpForm />
                        </MDBTabsPane>
                    </MDBTabsContent>
                </div>
            </div>
        </div>
    )
}

export default AuthContainer