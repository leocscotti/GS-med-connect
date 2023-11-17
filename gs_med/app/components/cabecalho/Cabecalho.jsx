import Link from 'next/link';
import Cadastro from '../../cadastro/page';
 
export default function Cabecalho() {
    return (
        <header>
            <nav>
              <ul>
                <li>
                  <Link href="/gs_med/app/page.tsx">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/gs_med/app/">
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link href="../../cadastro/page.jsx">
                    Cadastro
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        );
    };

