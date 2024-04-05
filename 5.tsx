<div className="container mx-auto mt-10">
          {/* Cardコンポーネントを使ってFirestoreから取得したデータを表示 */}
          {items.map((task) => (
            <Card key={task.id} id={task.id} title={task.title} description={task.description} />
          ))}
        </div>
//Firestoreから取得したアイテムのデータをマップしています。各アイテムごとに、<Card>コンポーネントを生成しています。
//Reactにおいて、マップは主に配列内の要素を処理してコンポーネントを生成する際に使用されます。