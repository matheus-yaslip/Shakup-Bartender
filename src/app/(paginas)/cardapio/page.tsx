"use client";

import Image from "next/image";
import { useState } from "react";

type Drink = {
  name: string;
  image: string;
  ingredients: string[];
};

type Menu = {
  name: string;
  tag: string;
  intro: string;
  drinks: Drink[];
};

const menus: Menu[] = [
  {
    name: "Soft",
    tag: "SEM ÁLCOOL",
    intro:
      "Opções refrescantes sem álcool, com combinações de frutas, sucos, cremosidade e soda italiana.",
    drinks: [
      {
        name: "Summer",
        image: "/cardapio/soft-1.jpg",
        ingredients: ["Manga", "Maracujá", "Creme de leite", "Groselha"],
      },
      {
        name: "Serena",
        image: "/cardapio/soft-2.jpg",
        ingredients: ["Laranja", "Abacaxi", "Pêssego", "Leite condensado"],
      },
      {
        name: "Maresias",
        image: "/cardapio/soft-3.jpg",
        ingredients: ["Pêssego", "Abacaxi", "Groselha"],
      },
      {
        name: "Fresh",
        image: "/cardapio/soft-4.jpg",
        ingredients: ["Manga", "Laranja", "Água"],
      },
      {
        name: "Flórida",
        image: "/cardapio/soft-5.jpg",
        ingredients: ["Uva", "Laranja", "Refrigerante de limão"],
      },
      {
        name: "Soda Italiana",
        image: "/cardapio/soft-6.jpg",
        ingredients: ["Syrup de frutas", "Água gaseificada"],
      },
    ],
  },

  {
    name: "Bronze",
    tag: "CAIPIRINHAS",
    intro:
      "Cardápio orientado a caipirinhas de frutas selecionadas, com bases alcoólicas e combinações clássicas.",
    drinks: [
      {
        name: "Morango",
        image: "/cardapio/bronze-1.jpg",
        ingredients: ["Morango", "Base alcoólica selecionada"],
      },
      {
        name: "Limão",
        image: "/cardapio/bronze-2.jpg",
        ingredients: ["Limão", "Base alcoólica selecionada"],
      },
      {
        name: "Abacaxi",
        image: "/cardapio/bronze-3.jpg",
        ingredients: ["Abacaxi", "Base alcoólica selecionada"],
      },
      {
        name: "Maracujá",
        image: "/cardapio/bronze-4.jpg",
        ingredients: ["Maracujá", "Base alcoólica selecionada"],
      },
      {
        name: "Vodka Smirnoff",
        image: "/cardapio/bronze-5.jpg",
        ingredients: ["Vodka Smirnoff"],
      },
      {
        name: "Saquê",
        image: "/cardapio/bronze-6.jpg",
        ingredients: ["Saquê Fuji ou Sakeih"],
      },
    ],
  },

  {
    name: "Prata",
    tag: "AMPLIAÇÃO DE SABORES",
    intro:
      "Além das caipirinhas de frutas selecionadas, o Cardápio Prata acrescenta drinks clássicos e opções sem álcool.",
    drinks: [
      {
        name: "Mojito",
        image: "/cardapio/prata-1.jpg",
        ingredients: ["Rum", "Hortelã", "Açúcar", "Limão", "Água com gás"],
      },
      {
        name: "Piña Colada",
        image: "/cardapio/prata-2.jpg",
        ingredients: ["Rum", "Leite de coco", "Abacaxi", "Leite condensado"],
      },
      {
        name: "Sex on the Beach",
        image: "/cardapio/prata-3.jpg",
        ingredients: ["Vodka", "Licor de pêssego", "Laranja", "Groselha"],
      },
      {
        name: "Lagoa Azul",
        image: "/cardapio/prata-4.jpg",
        ingredients: ["Vodka", "Curaçau Blue", "Refrigerante de limão"],
      },
      {
        name: "Summer",
        image: "/cardapio/prata-5.jpg",
        ingredients: ["Manga", "Maracujá", "Creme de leite", "Groselha"],
      },
      {
        name: "Serena",
        image: "/cardapio/prata-6.jpg",
        ingredients: ["Laranja", "Abacaxi", "Pêssego", "Leite condensado"],
      },
    ],
  },

  {
    name: "Ouro",
    tag: "EXPERIÊNCIA PREMIUM",
    intro:
      "O Cardápio Ouro mantém as caipirinhas e acrescenta cocktails premium para uma experiência mais sofisticada.",
    drinks: [
      {
        name: "Gin Tônica",
        image: "/cardapio/ouro-1.jpg",
        ingredients: ["Gin Gordon’s", "Água tônica"],
      },
      {
        name: "Aperol Spritz",
        image: "/cardapio/ouro-2.jpg",
        ingredients: ["Aperol", "Prosecco", "Água com gás"],
      },
      {
        name: "Negroni",
        image: "/cardapio/ouro-3.jpg",
        ingredients: ["Gin Gordon’s", "Vermute", "Bitter Campari"],
      },
      {
        name: "Caipirinha de Morango",
        image: "/cardapio/ouro-4.jpg",
        ingredients: ["Morango", "Base alcoólica selecionada"],
      },
      {
        name: "Caipirinha de Limão",
        image: "/cardapio/ouro-5.jpg",
        ingredients: ["Limão", "Base alcoólica selecionada"],
      },
    ],
  },

  {
    name: "Diamante",
    tag: "EXPERIÊNCIA COMPLETA",
    intro:
      "O Cardápio Diamante amplia as frutas, as marcas de bebidas e a seleção de cocktails premium.",
    drinks: [
      {
        name: "Moscow Mule",
        image: "/cardapio/diamante-1.jpg",
        ingredients: [
          "Vodka Absolut",
          "Limão",
          "Syrup de gengibre",
          "Espuma artesanal de gengibre",
        ],
      },
      {
        name: "Negroni",
        image: "/cardapio/diamante-2.jpg",
        ingredients: ["Gin", "Vermute", "Bitter Campari"],
      },
      {
        name: "Frutas Vermelhas",
        image: "/cardapio/diamante-3.jpg",
        ingredients: ["Frutas vermelhas", "Base alcoólica selecionada"],
      },
      {
        name: "Tangerina",
        image: "/cardapio/diamante-4.jpg",
        ingredients: ["Tangerina", "Base alcoólica selecionada"],
      },
      {
        name: "Gin Tanqueray",
        image: "/cardapio/diamante-5.jpg",
        ingredients: ["Gin Tanqueray ou Bombay"],
      },
    ],
  },
];

function MenuChapter({
  menu,
  index,
}: {
  menu: Menu;
  index: number;
}) {
  const [activeDrink, setActiveDrink] = useState(0);

  const selected = menu.drinks[activeDrink];

  return (
    <article className="cocktail-menu">
      <div className="cocktail-menu__content">
        <div className="cocktail-menu__heading">
          <span className="cocktail-menu__number">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="cocktail-menu__tag">{menu.tag}</span>

          <h2>{menu.name}</h2>

          <p>{menu.intro}</p>
        </div>

        <div
          className="cocktail-menu__drink-info"
          key={`${menu.name}-${activeDrink}`}
        >
          <h3>{selected.name}</h3>

          <ul>
            {selected.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="cocktail-menu__thumbs">
          {menu.drinks.map((drink, drinkIndex) => (
            <button
              type="button"
              key={drink.name}
              className={`cocktail-thumb ${
                activeDrink === drinkIndex ? "is-active" : ""
              }`}
              onMouseEnter={() => setActiveDrink(drinkIndex)}
              onFocus={() => setActiveDrink(drinkIndex)}
              onClick={() => setActiveDrink(drinkIndex)}
              aria-label={`Visualizar ${drink.name}`}
              aria-pressed={activeDrink === drinkIndex}
            >
              <Image
                src={drink.image}
                alt={drink.name}
                fill
                sizes="130px"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="cocktail-menu__visual">
        <div
          className="cocktail-menu__image"
          key={selected.image}
        >
          <Image
            src={selected.image}
            alt={`${selected.name} — Cardápio ${menu.name}`}
            fill
            priority={index === 0}
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
      </div>
    </article>
  );
}

export default function Cardapio() {
  return (
    <main id="conteudo">
      <section className="page-hero menu-hero">
      
        <div className="eyebrow">
          CARDÁPIO — CINCO EXPERIÊNCIAS
        </div>
        
         <div
          className="contact-glass2"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 300 390"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54 62H246C238 141 198 190 150 216C102 190 62 141 54 62Z"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path
              d="M150 216V305"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path
              d="M103 334H197"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path
              d="M73 104C112 116 188 116 227 104"
              stroke="currentColor"
              strokeWidth="1.5"
            />

            <path
              d="M213 37L171 112"
              stroke="currentColor"
              strokeWidth="2"
            />

            <circle
              cx="216"
              cy="39"
              r="18"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <h1 data-reveal>
          Escolha menos pelo nome.
          <br />
          <em>Escolha pela atmosfera.</em>
        </h1>

        <p>
          Os cardápios da ShakeUp Bartenders foram organizados para atender
          diferentes necessidades, preferências e formatos de evento.
        </p>
      </section>

      <section className="interactive-menu">
        {menus.map((menu, index) => (
          <MenuChapter
            key={menu.name}
            menu={menu}
            index={index}
          />
        ))}
      </section>
    </main>
  );
}