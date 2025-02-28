import './App.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver} from "@hookform/resolvers/zod";
import { z } from 'zod'

const tmpDate = new Date();
const today = `${tmpDate.getFullYear()}-${(tmpDate.getMonth()+1).toString().padStart(2, '0')}-${(tmpDate.getDate()).toString().padStart(2, '0')}`

const submitSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  description: z.string().nullable(),
  tag: z.string().nullable(),
  limit: z.date().min(new Date(new Date().setDate(new Date().getDate()-1)), { message: "limit must be after today." }),
});

type SubmitShema = z.infer<typeof submitSchema>;

const App = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitShema>({
    resolver: zodResolver(submitSchema),
  });

  const onSubmit: SubmitHandler<SubmitShema> = (d) => {
    console.log(d)
    alert(`${d.title}\n${d.description}\n${d.tag}\n${d.limit}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='container title'>
          <div>
            <p>Title:</p>
            <input type="text" {...register('title', { required: true })} placeholder='Input title' />
          </div>
          {errors.title && <p className='error_message'>{errors.title.message}</p>}
        </div>

        <div className='container description'>
          <div>
            <p>Description:</p>
            <textarea placeholder={"Input description"}></textarea>
          </div>
        </div>

        <div className='container tag'>
          <div>
            <p>Tag:</p>
            <input type="text" placeholder='Input tag' />
          </div>
        </div>

        <div className='container limit'>
          <div>
            <p>Limit:</p>
            <input type="date" defaultValue={today} {...register('limit', { required: true, valueAsDate: true })} />
          </div>
          {errors.limit && <p className='error_message'>{errors.limit.message}</p>}
        </div>

        <button type='submit' className='submit'>Submit</button>
      </form>
    </>
  )
}

export default App;