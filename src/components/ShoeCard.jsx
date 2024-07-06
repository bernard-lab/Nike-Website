const ShoeCard = ({imgUrl, changeBigShoeImage, bigShoeImg}) => {
    const handleClick = () => {
        if(bigShoeImg !== imgUrl.bigShoe){
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }

    return (
    <div className={`border-2 rounded-xl cursor-pointer hover:scale-110 transition-transform max-sm:flex-1 ${bigShoeImg === imgUrl.bigShoe
        ? 'border-coral-red'
        : 'border-transparent' } `}
    onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ">
            <img 
                src={imgUrl.thumbnail} 
                alt="shoe collection" 
                width={127}
                height={103}
                className="object-contain"
            />
        </div>
    </div>
  )
}

export default ShoeCard