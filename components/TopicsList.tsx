import RemoveBtn from "./RemoveBtn"
import UpdateBtn from "./UpdateBtn"

export default function TopicsList() {
  return (
    <>
        <div className="bg-slate-200 w-full h-64 mt-10 flex flex-col gap-6">
            <div className="bg-slate-50 border-2 border-gray-300 py-4 px-10 flex gap-4">
                <div className="bg-slate-300 w-4/5">
                    <h2 className="text-2xl font-bold">Title</h2>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nihil nam dignissimos sapiente maxime natus nemo, provident facilis, laboriosam explicabo quisquam porro velit quibusdam accusamus fugit. Voluptas quo odit tempore saepe sint vitae expedita voluptatem esse reiciendis ex dignissimos alias at facilis quia, consequatur nihil similique natus facere deleniti maiores.</p>
                </div>
                <div className="bg-slate-400 w-1/5 flex justify-center gap-2">
                    <RemoveBtn/>
                    <UpdateBtn/>
                </div>
            </div>
        </div>
    </>
  )
}
