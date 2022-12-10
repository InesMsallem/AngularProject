'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">miniprojet documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-1db53477d0bbb2153d57a8740d4e4d897a94badc4fcca451650c7fae864a5c35997f96401b04061a609ea47fcbced6fb93712ce823cd170a97ebd15c94a120d3"' : 'data-target="#xs-components-links-module-AppModule-1db53477d0bbb2153d57a8740d4e4d897a94badc4fcca451650c7fae864a5c35997f96401b04061a609ea47fcbced6fb93712ce823cd170a97ebd15c94a120d3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1db53477d0bbb2153d57a8740d4e4d897a94badc4fcca451650c7fae864a5c35997f96401b04061a609ea47fcbced6fb93712ce823cd170a97ebd15c94a120d3"' :
                                            'id="xs-components-links-module-AppModule-1db53477d0bbb2153d57a8740d4e4d897a94badc4fcca451650c7fae864a5c35997f96401b04061a609ea47fcbced6fb93712ce823cd170a97ebd15c94a120d3"' }>
                                            <li class="link">
                                                <a href="components/AddProjetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddProjetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContractsModule.html" data-type="entity-link" >ContractsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContractsModule-8d15fa10847103d7d3e2a67072adece5ee1cbfed2393485283ff2ab51c4d76331256e8e474e8467db58f6b9128923c9762e2ea42c1994c766d909e9ec3a36234"' : 'data-target="#xs-components-links-module-ContractsModule-8d15fa10847103d7d3e2a67072adece5ee1cbfed2393485283ff2ab51c4d76331256e8e474e8467db58f6b9128923c9762e2ea42c1994c766d909e9ec3a36234"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContractsModule-8d15fa10847103d7d3e2a67072adece5ee1cbfed2393485283ff2ab51c4d76331256e8e474e8467db58f6b9128923c9762e2ea42c1994c766d909e9ec3a36234"' :
                                            'id="xs-components-links-module-ContractsModule-8d15fa10847103d7d3e2a67072adece5ee1cbfed2393485283ff2ab51c4d76331256e8e474e8467db58f6b9128923c9762e2ea42c1994c766d909e9ec3a36234"' }>
                                            <li class="link">
                                                <a href="components/ContractDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContractDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContractFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContractFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContractListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContractListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContractsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContractsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalContractDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalContractDetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContractsRoutingModule.html" data-type="entity-link" >ContractsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EtudiantsModule.html" data-type="entity-link" >EtudiantsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EtudiantsModule-0c900d732dfb66ef1a1b4d1b86fa0d0ddea2bd3948b3ca7227e8517ddd17dbe260e633b86412220f74168cf384130f831468408f7c94ea7560b0c716190859b7"' : 'data-target="#xs-components-links-module-EtudiantsModule-0c900d732dfb66ef1a1b4d1b86fa0d0ddea2bd3948b3ca7227e8517ddd17dbe260e633b86412220f74168cf384130f831468408f7c94ea7560b0c716190859b7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EtudiantsModule-0c900d732dfb66ef1a1b4d1b86fa0d0ddea2bd3948b3ca7227e8517ddd17dbe260e633b86412220f74168cf384130f831468408f7c94ea7560b0c716190859b7"' :
                                            'id="xs-components-links-module-EtudiantsModule-0c900d732dfb66ef1a1b4d1b86fa0d0ddea2bd3948b3ca7227e8517ddd17dbe260e633b86412220f74168cf384130f831468408f7c94ea7560b0c716190859b7"' }>
                                            <li class="link">
                                                <a href="components/EtudiantsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EtudiantsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormEtudiantComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormEtudiantComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListEtudiantComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListEtudiantComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EtudiantsRoutingModule.html" data-type="entity-link" >EtudiantsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ListProjetComponent.html" data-type="entity-link" >ListProjetComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Contrat.html" data-type="entity-link" >Contrat</a>
                            </li>
                            <li class="link">
                                <a href="classes/Departement.html" data-type="entity-link" >Departement</a>
                            </li>
                            <li class="link">
                                <a href="classes/Equipe.html" data-type="entity-link" >Equipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/Etudiant.html" data-type="entity-link" >Etudiant</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ContratService.html" data-type="entity-link" >ContratService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EtudiantService.html" data-type="entity-link" >EtudiantService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});