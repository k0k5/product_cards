interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export function ProductCard({
  id,
  image,
  title,
  description,
  price,
}: ProductCardProps) {
  return (
    <article
      data-id={id}
      className="flex max-w-xs flex-col rounded-[28px] bg-white p-5 shadow-[0_4px_20px_rgba(15,30,70,0.06)]"
    >
      <div className="mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-[20px] bg-slate-100">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <h3 className="mb-2 text-[22px] font-bold leading-tight text-slate-900 lowercase">
        {title}
      </h3>

      <p className="mb-3 text-sm leading-relaxed text-slate-400">
        {description}
      </p>

      <p className="mb-4 text-sm text-slate-900">{price} ₽</p>

      <button
        type="button"
        className="mt-2 self-start rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 active:bg-slate-950"
      >
        в корзину
      </button>
    </article>
  );
}

export default ProductCard;