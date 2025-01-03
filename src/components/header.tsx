import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '/public/logo.svg';
import SearchIcon from "/public/icon-search.svg";
import UserIcon from "/public/icon-user.svg";

export function Header(){
    return (
        <header>
            <div>
                <Image src={LogoImage} alt="logo"/>
                <div>
                    <nav>
                        <Link href="#">Início</Link>
                        <Link href="#">Benefícios</Link>
                        <Link href="#">Para quem é o curso</Link>
                        <Link href="#">Preços promocionais</Link>
                        <Link href="#">Sobre nós</Link>
                    </nav>
                    <div>
                        <button>
                            <Image src={SearchIcon} alt='Icon Search'/>
                        </button>
                        <button>
                            <Image src={UserIcon} alt='Icon User'/>
                            <span>Fazer login</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}