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
                    <a href="index.html" data-type="index-link">nestjs-api-tutorilas documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-6c772cd8500b18c708d189ceee5cb0751288f4c7b7b0ee16727705bd8995d72e63330551febfff542ccae622ca16ae39aab1fd781cdc811307d52970735e389e"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-6c772cd8500b18c708d189ceee5cb0751288f4c7b7b0ee16727705bd8995d72e63330551febfff542ccae622ca16ae39aab1fd781cdc811307d52970735e389e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-6c772cd8500b18c708d189ceee5cb0751288f4c7b7b0ee16727705bd8995d72e63330551febfff542ccae622ca16ae39aab1fd781cdc811307d52970735e389e"' :
                                            'id="xs-controllers-links-module-AuthModule-6c772cd8500b18c708d189ceee5cb0751288f4c7b7b0ee16727705bd8995d72e63330551febfff542ccae622ca16ae39aab1fd781cdc811307d52970735e389e"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-6c772cd8500b18c708d189ceee5cb0751288f4c7b7b0ee16727705bd8995d72e63330551febfff542ccae622ca16ae39aab1fd781cdc811307d52970735e389e"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-6c772cd8500b18c708d189ceee5cb0751288f4c7b7b0ee16727705bd8995d72e63330551febfff542ccae622ca16ae39aab1fd781cdc811307d52970735e389e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-6c772cd8500b18c708d189ceee5cb0751288f4c7b7b0ee16727705bd8995d72e63330551febfff542ccae622ca16ae39aab1fd781cdc811307d52970735e389e"' :
                                        'id="xs-injectables-links-module-AuthModule-6c772cd8500b18c708d189ceee5cb0751288f4c7b7b0ee16727705bd8995d72e63330551febfff542ccae622ca16ae39aab1fd781cdc811307d52970735e389e"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BookmarkModule.html" data-type="entity-link" >BookmarkModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BookmarkModule-0ea36dae8b15f558b29f66e205618a59e4fef270ce3ac4dfc031ae61af0ae63ca52f48a37b7473979aea5fc34730a59a3364dddc26cbfce6fe9c4c24b135a6eb"' : 'data-bs-target="#xs-controllers-links-module-BookmarkModule-0ea36dae8b15f558b29f66e205618a59e4fef270ce3ac4dfc031ae61af0ae63ca52f48a37b7473979aea5fc34730a59a3364dddc26cbfce6fe9c4c24b135a6eb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BookmarkModule-0ea36dae8b15f558b29f66e205618a59e4fef270ce3ac4dfc031ae61af0ae63ca52f48a37b7473979aea5fc34730a59a3364dddc26cbfce6fe9c4c24b135a6eb"' :
                                            'id="xs-controllers-links-module-BookmarkModule-0ea36dae8b15f558b29f66e205618a59e4fef270ce3ac4dfc031ae61af0ae63ca52f48a37b7473979aea5fc34730a59a3364dddc26cbfce6fe9c4c24b135a6eb"' }>
                                            <li class="link">
                                                <a href="controllers/BookmarkController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookmarkController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BookmarkModule-0ea36dae8b15f558b29f66e205618a59e4fef270ce3ac4dfc031ae61af0ae63ca52f48a37b7473979aea5fc34730a59a3364dddc26cbfce6fe9c4c24b135a6eb"' : 'data-bs-target="#xs-injectables-links-module-BookmarkModule-0ea36dae8b15f558b29f66e205618a59e4fef270ce3ac4dfc031ae61af0ae63ca52f48a37b7473979aea5fc34730a59a3364dddc26cbfce6fe9c4c24b135a6eb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BookmarkModule-0ea36dae8b15f558b29f66e205618a59e4fef270ce3ac4dfc031ae61af0ae63ca52f48a37b7473979aea5fc34730a59a3364dddc26cbfce6fe9c4c24b135a6eb"' :
                                        'id="xs-injectables-links-module-BookmarkModule-0ea36dae8b15f558b29f66e205618a59e4fef270ce3ac4dfc031ae61af0ae63ca52f48a37b7473979aea5fc34730a59a3364dddc26cbfce6fe9c4c24b135a6eb"' }>
                                        <li class="link">
                                            <a href="injectables/BookmarkService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookmarkService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BookModule.html" data-type="entity-link" >BookModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BookModule-868388254a298730e6f3521b7f5f8a7d5c60c20a5ec3c943c70cd27e692536872fa9f47052f5be3a0c2f8eaecfbfb31a52deb147dc89e21ffc0709e111ff0082"' : 'data-bs-target="#xs-controllers-links-module-BookModule-868388254a298730e6f3521b7f5f8a7d5c60c20a5ec3c943c70cd27e692536872fa9f47052f5be3a0c2f8eaecfbfb31a52deb147dc89e21ffc0709e111ff0082"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BookModule-868388254a298730e6f3521b7f5f8a7d5c60c20a5ec3c943c70cd27e692536872fa9f47052f5be3a0c2f8eaecfbfb31a52deb147dc89e21ffc0709e111ff0082"' :
                                            'id="xs-controllers-links-module-BookModule-868388254a298730e6f3521b7f5f8a7d5c60c20a5ec3c943c70cd27e692536872fa9f47052f5be3a0c2f8eaecfbfb31a52deb147dc89e21ffc0709e111ff0082"' }>
                                            <li class="link">
                                                <a href="controllers/BookController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BookModule-868388254a298730e6f3521b7f5f8a7d5c60c20a5ec3c943c70cd27e692536872fa9f47052f5be3a0c2f8eaecfbfb31a52deb147dc89e21ffc0709e111ff0082"' : 'data-bs-target="#xs-injectables-links-module-BookModule-868388254a298730e6f3521b7f5f8a7d5c60c20a5ec3c943c70cd27e692536872fa9f47052f5be3a0c2f8eaecfbfb31a52deb147dc89e21ffc0709e111ff0082"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BookModule-868388254a298730e6f3521b7f5f8a7d5c60c20a5ec3c943c70cd27e692536872fa9f47052f5be3a0c2f8eaecfbfb31a52deb147dc89e21ffc0709e111ff0082"' :
                                        'id="xs-injectables-links-module-BookModule-868388254a298730e6f3521b7f5f8a7d5c60c20a5ec3c943c70cd27e692536872fa9f47052f5be3a0c2f8eaecfbfb31a52deb147dc89e21ffc0709e111ff0082"' }>
                                        <li class="link">
                                            <a href="injectables/BookService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoryModule-642e72e1f4f2d41fa4ebcaafc38fb7173c1ba3d4bbe42e4484d4dbb9e2d0281bf7e530a2e3382e5a26de8251abdec5cf1e0c9e705fcf2c71e00faee61baa34b2"' : 'data-bs-target="#xs-controllers-links-module-CategoryModule-642e72e1f4f2d41fa4ebcaafc38fb7173c1ba3d4bbe42e4484d4dbb9e2d0281bf7e530a2e3382e5a26de8251abdec5cf1e0c9e705fcf2c71e00faee61baa34b2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoryModule-642e72e1f4f2d41fa4ebcaafc38fb7173c1ba3d4bbe42e4484d4dbb9e2d0281bf7e530a2e3382e5a26de8251abdec5cf1e0c9e705fcf2c71e00faee61baa34b2"' :
                                            'id="xs-controllers-links-module-CategoryModule-642e72e1f4f2d41fa4ebcaafc38fb7173c1ba3d4bbe42e4484d4dbb9e2d0281bf7e530a2e3382e5a26de8251abdec5cf1e0c9e705fcf2c71e00faee61baa34b2"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoryModule-642e72e1f4f2d41fa4ebcaafc38fb7173c1ba3d4bbe42e4484d4dbb9e2d0281bf7e530a2e3382e5a26de8251abdec5cf1e0c9e705fcf2c71e00faee61baa34b2"' : 'data-bs-target="#xs-injectables-links-module-CategoryModule-642e72e1f4f2d41fa4ebcaafc38fb7173c1ba3d4bbe42e4484d4dbb9e2d0281bf7e530a2e3382e5a26de8251abdec5cf1e0c9e705fcf2c71e00faee61baa34b2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoryModule-642e72e1f4f2d41fa4ebcaafc38fb7173c1ba3d4bbe42e4484d4dbb9e2d0281bf7e530a2e3382e5a26de8251abdec5cf1e0c9e705fcf2c71e00faee61baa34b2"' :
                                        'id="xs-injectables-links-module-CategoryModule-642e72e1f4f2d41fa4ebcaafc38fb7173c1ba3d4bbe42e4484d4dbb9e2d0281bf7e530a2e3382e5a26de8251abdec5cf1e0c9e705fcf2c71e00faee61baa34b2"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FileUploadModule.html" data-type="entity-link" >FileUploadModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FileUploadModule-33c0098ac783547752efc5139952532310a667de32bd83a777964f8c4be1e64c12f7fe56ec195c5cdf80180450d00993957fa14e62b41c9f8c3b3067d3cfc735"' : 'data-bs-target="#xs-controllers-links-module-FileUploadModule-33c0098ac783547752efc5139952532310a667de32bd83a777964f8c4be1e64c12f7fe56ec195c5cdf80180450d00993957fa14e62b41c9f8c3b3067d3cfc735"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FileUploadModule-33c0098ac783547752efc5139952532310a667de32bd83a777964f8c4be1e64c12f7fe56ec195c5cdf80180450d00993957fa14e62b41c9f8c3b3067d3cfc735"' :
                                            'id="xs-controllers-links-module-FileUploadModule-33c0098ac783547752efc5139952532310a667de32bd83a777964f8c4be1e64c12f7fe56ec195c5cdf80180450d00993957fa14e62b41c9f8c3b3067d3cfc735"' }>
                                            <li class="link">
                                                <a href="controllers/FileUploadController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileUploadController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FileUploadModule-33c0098ac783547752efc5139952532310a667de32bd83a777964f8c4be1e64c12f7fe56ec195c5cdf80180450d00993957fa14e62b41c9f8c3b3067d3cfc735"' : 'data-bs-target="#xs-injectables-links-module-FileUploadModule-33c0098ac783547752efc5139952532310a667de32bd83a777964f8c4be1e64c12f7fe56ec195c5cdf80180450d00993957fa14e62b41c9f8c3b3067d3cfc735"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FileUploadModule-33c0098ac783547752efc5139952532310a667de32bd83a777964f8c4be1e64c12f7fe56ec195c5cdf80180450d00993957fa14e62b41c9f8c3b3067d3cfc735"' :
                                        'id="xs-injectables-links-module-FileUploadModule-33c0098ac783547752efc5139952532310a667de32bd83a777964f8c4be1e64c12f7fe56ec195c5cdf80180450d00993957fa14e62b41c9f8c3b3067d3cfc735"' }>
                                        <li class="link">
                                            <a href="injectables/FileUploadService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileUploadService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-e32c08d40aa0078c5233b5119f2dc025cb97cc7bb01425fa736b442450abdbc2dd971fe902c08e4140cdf2378ec3c2ab04104a8e9d40e7b8ef382f18e72a613b"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-e32c08d40aa0078c5233b5119f2dc025cb97cc7bb01425fa736b442450abdbc2dd971fe902c08e4140cdf2378ec3c2ab04104a8e9d40e7b8ef382f18e72a613b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-e32c08d40aa0078c5233b5119f2dc025cb97cc7bb01425fa736b442450abdbc2dd971fe902c08e4140cdf2378ec3c2ab04104a8e9d40e7b8ef382f18e72a613b"' :
                                        'id="xs-injectables-links-module-PrismaModule-e32c08d40aa0078c5233b5119f2dc025cb97cc7bb01425fa736b442450abdbc2dd971fe902c08e4140cdf2378ec3c2ab04104a8e9d40e7b8ef382f18e72a613b"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductModule-f788023e0402309f3995513ed8a8d34549c7140738e919c29a55e0f47fb978132ac866cbfe9153eb10684b338c86582c762a2ccab3d1b08b222dd6d29a73813b"' : 'data-bs-target="#xs-controllers-links-module-ProductModule-f788023e0402309f3995513ed8a8d34549c7140738e919c29a55e0f47fb978132ac866cbfe9153eb10684b338c86582c762a2ccab3d1b08b222dd6d29a73813b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-f788023e0402309f3995513ed8a8d34549c7140738e919c29a55e0f47fb978132ac866cbfe9153eb10684b338c86582c762a2ccab3d1b08b222dd6d29a73813b"' :
                                            'id="xs-controllers-links-module-ProductModule-f788023e0402309f3995513ed8a8d34549c7140738e919c29a55e0f47fb978132ac866cbfe9153eb10684b338c86582c762a2ccab3d1b08b222dd6d29a73813b"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductModule-f788023e0402309f3995513ed8a8d34549c7140738e919c29a55e0f47fb978132ac866cbfe9153eb10684b338c86582c762a2ccab3d1b08b222dd6d29a73813b"' : 'data-bs-target="#xs-injectables-links-module-ProductModule-f788023e0402309f3995513ed8a8d34549c7140738e919c29a55e0f47fb978132ac866cbfe9153eb10684b338c86582c762a2ccab3d1b08b222dd6d29a73813b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-f788023e0402309f3995513ed8a8d34549c7140738e919c29a55e0f47fb978132ac866cbfe9153eb10684b338c86582c762a2ccab3d1b08b222dd6d29a73813b"' :
                                        'id="xs-injectables-links-module-ProductModule-f788023e0402309f3995513ed8a8d34549c7140738e919c29a55e0f47fb978132ac866cbfe9153eb10684b338c86582c762a2ccab3d1b08b222dd6d29a73813b"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-79b8049e3970ca2790837bd55db1228f9837bf0d603177ee315645a9681a09751647b704d08a8d78e853b7e2ac480f0d4e82b0340678f59130d0874e799898d9"' : 'data-bs-target="#xs-controllers-links-module-UserModule-79b8049e3970ca2790837bd55db1228f9837bf0d603177ee315645a9681a09751647b704d08a8d78e853b7e2ac480f0d4e82b0340678f59130d0874e799898d9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-79b8049e3970ca2790837bd55db1228f9837bf0d603177ee315645a9681a09751647b704d08a8d78e853b7e2ac480f0d4e82b0340678f59130d0874e799898d9"' :
                                            'id="xs-controllers-links-module-UserModule-79b8049e3970ca2790837bd55db1228f9837bf0d603177ee315645a9681a09751647b704d08a8d78e853b7e2ac480f0d4e82b0340678f59130d0874e799898d9"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-79b8049e3970ca2790837bd55db1228f9837bf0d603177ee315645a9681a09751647b704d08a8d78e853b7e2ac480f0d4e82b0340678f59130d0874e799898d9"' : 'data-bs-target="#xs-injectables-links-module-UserModule-79b8049e3970ca2790837bd55db1228f9837bf0d603177ee315645a9681a09751647b704d08a8d78e853b7e2ac480f0d4e82b0340678f59130d0874e799898d9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-79b8049e3970ca2790837bd55db1228f9837bf0d603177ee315645a9681a09751647b704d08a8d78e853b7e2ac480f0d4e82b0340678f59130d0874e799898d9"' :
                                        'id="xs-injectables-links-module-UserModule-79b8049e3970ca2790837bd55db1228f9837bf0d603177ee315645a9681a09751647b704d08a8d78e853b7e2ac480f0d4e82b0340678f59130d0874e799898d9"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BookController.html" data-type="entity-link" >BookController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BookmarkController.html" data-type="entity-link" >BookmarkController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoryController.html" data-type="entity-link" >CategoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FileUploadController.html" data-type="entity-link" >FileUploadController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductController.html" data-type="entity-link" >ProductController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthDto.html" data-type="entity-link" >AuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthToken.html" data-type="entity-link" >AuthToken</a>
                            </li>
                            <li class="link">
                                <a href="classes/Book.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBookDto.html" data-type="entity-link" >CreateBookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBookmarkDto.html" data-type="entity-link" >CreateBookmarkDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditBookmarkDto.html" data-type="entity-link" >EditBookmarkDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditCategoryDto.html" data-type="entity-link" >EditCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditUserDto.html" data-type="entity-link" >EditUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtGuard.html" data-type="entity-link" >JwtGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBookDto.html" data-type="entity-link" >UpdateBookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookmarkService.html" data-type="entity-link" >BookmarkService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookService.html" data-type="entity-link" >BookService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileUploadService.html" data-type="entity-link" >FileUploadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ParseObjectIdPipePipe.html" data-type="entity-link" >ParseObjectIdPipePipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});