PGDMP                         x            equanime    9.6.1    12.3 M    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    33089    equanime    DATABASE     f   CREATE DATABASE equanime WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C' LC_CTYPE = 'C';
    DROP DATABASE equanime;
                postgres    false            �            1259    57825 
   dia_semana    TABLE     l   CREATE TABLE public.dia_semana (
    id integer NOT NULL,
    nome_semana character varying(50) NOT NULL
);
    DROP TABLE public.dia_semana;
       public            postgres    false            �            1259    57823    dia_semana_id_seq    SEQUENCE     z   CREATE SEQUENCE public.dia_semana_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.dia_semana_id_seq;
       public          postgres    false    197            �           0    0    dia_semana_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.dia_semana_id_seq OWNED BY public.dia_semana.id;
          public          postgres    false    196            �            1259    57771 
   disciplina    TABLE     �   CREATE TABLE public.disciplina (
    id integer NOT NULL,
    nome character varying(150) NOT NULL,
    id_periodo integer,
    id_professor integer
);
    DROP TABLE public.disciplina;
       public            postgres    false            �            1259    57769    disciplina_id_seq    SEQUENCE     z   CREATE SEQUENCE public.disciplina_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.disciplina_id_seq;
       public          postgres    false    191            �           0    0    disciplina_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.disciplina_id_seq OWNED BY public.disciplina.id;
          public          postgres    false    190            �            1259    57863    disciplina_professor    TABLE     {   CREATE TABLE public.disciplina_professor (
    id bigint NOT NULL,
    nome character varying(255),
    periodo integer
);
 (   DROP TABLE public.disciplina_professor;
       public            postgres    false            �            1259    57841    disponibilidade_professor    TABLE     �   CREATE TABLE public.disponibilidade_professor (
    id integer NOT NULL,
    id_usuario integer NOT NULL,
    id_semana integer NOT NULL,
    id_turno integer NOT NULL
);
 -   DROP TABLE public.disponibilidade_professor;
       public            postgres    false            �            1259    57839     disponibilidade_professor_id_seq    SEQUENCE     �   CREATE SEQUENCE public.disponibilidade_professor_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public.disponibilidade_professor_id_seq;
       public          postgres    false    201            �           0    0     disponibilidade_professor_id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public.disponibilidade_professor_id_seq OWNED BY public.disponibilidade_professor.id;
          public          postgres    false    200            �            1259    57789    grade_horaria    TABLE     �   CREATE TABLE public.grade_horaria (
    id integer NOT NULL,
    id_disciplina integer NOT NULL,
    hora character varying(40) NOT NULL,
    id_periodo integer NOT NULL,
    dia_semana character varying(255)
);
 !   DROP TABLE public.grade_horaria;
       public            postgres    false            �            1259    57787    grade_horaria_id_seq    SEQUENCE     }   CREATE SEQUENCE public.grade_horaria_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.grade_horaria_id_seq;
       public          postgres    false    193            �           0    0    grade_horaria_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.grade_horaria_id_seq OWNED BY public.grade_horaria.id;
          public          postgres    false    192            �            1259    33124    hibernate_sequence    SEQUENCE     {   CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.hibernate_sequence;
       public          postgres    false            �            1259    49501    observacao_professor    TABLE     �   CREATE TABLE public.observacao_professor (
    id integer NOT NULL,
    atendido boolean,
    id_professor integer,
    observacao character varying(255)
);
 (   DROP TABLE public.observacao_professor;
       public            postgres    false            �            1259    49496    pedido_aluno    TABLE     w   CREATE TABLE public.pedido_aluno (
    id integer NOT NULL,
    atendido boolean,
    pedido character varying(255)
);
     DROP TABLE public.pedido_aluno;
       public            postgres    false            �            1259    57763    periodo    TABLE     v   CREATE TABLE public.periodo (
    id_periodo integer NOT NULL,
    periodo_semestre character varying(60) NOT NULL
);
    DROP TABLE public.periodo;
       public            postgres    false            �            1259    57761    periodo_id_periodo_seq    SEQUENCE        CREATE SEQUENCE public.periodo_id_periodo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.periodo_id_periodo_seq;
       public          postgres    false    189            �           0    0    periodo_id_periodo_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.periodo_id_periodo_seq OWNED BY public.periodo.id_periodo;
          public          postgres    false    188            �            1259    57807    preferencia_disciplina    TABLE     �   CREATE TABLE public.preferencia_disciplina (
    id integer NOT NULL,
    id_disciplina integer NOT NULL,
    id_usuario integer NOT NULL
);
 *   DROP TABLE public.preferencia_disciplina;
       public            postgres    false            �            1259    57805    preferencia_disciplina_id_seq    SEQUENCE     �   CREATE SEQUENCE public.preferencia_disciplina_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.preferencia_disciplina_id_seq;
       public          postgres    false    195            �           0    0    preferencia_disciplina_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.preferencia_disciplina_id_seq OWNED BY public.preferencia_disciplina.id;
          public          postgres    false    194            �            1259    57833    turno    TABLE     `   CREATE TABLE public.turno (
    id integer NOT NULL,
    nome character varying(50) NOT NULL
);
    DROP TABLE public.turno;
       public            postgres    false            �            1259    57831    turno_id_seq    SEQUENCE     u   CREATE SEQUENCE public.turno_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.turno_id_seq;
       public          postgres    false    199            �           0    0    turno_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.turno_id_seq OWNED BY public.turno.id;
          public          postgres    false    198            �            1259    65859    usuario    TABLE     o  CREATE TABLE public.usuario (
    id integer NOT NULL,
    cpf character varying(15),
    senha character varying(50) NOT NULL,
    nome character varying(100) NOT NULL,
    papel character varying(35) NOT NULL,
    carga_horaria integer,
    email character varying(100),
    telefone character varying(50),
    cidade character varying(50),
    id_papel integer
);
    DROP TABLE public.usuario;
       public            postgres    false            �            1259    65857    usuario_id_seq    SEQUENCE     w   CREATE SEQUENCE public.usuario_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.usuario_id_seq;
       public          postgres    false    204            �           0    0    usuario_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;
          public          postgres    false    203                       2604    57828    dia_semana id    DEFAULT     n   ALTER TABLE ONLY public.dia_semana ALTER COLUMN id SET DEFAULT nextval('public.dia_semana_id_seq'::regclass);
 <   ALTER TABLE public.dia_semana ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    196    197    197            
           2604    57774    disciplina id    DEFAULT     n   ALTER TABLE ONLY public.disciplina ALTER COLUMN id SET DEFAULT nextval('public.disciplina_id_seq'::regclass);
 <   ALTER TABLE public.disciplina ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    191    190    191                       2604    57844    disponibilidade_professor id    DEFAULT     �   ALTER TABLE ONLY public.disponibilidade_professor ALTER COLUMN id SET DEFAULT nextval('public.disponibilidade_professor_id_seq'::regclass);
 K   ALTER TABLE public.disponibilidade_professor ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    200    201    201                       2604    57792    grade_horaria id    DEFAULT     t   ALTER TABLE ONLY public.grade_horaria ALTER COLUMN id SET DEFAULT nextval('public.grade_horaria_id_seq'::regclass);
 ?   ALTER TABLE public.grade_horaria ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    192    193    193            	           2604    57766    periodo id_periodo    DEFAULT     x   ALTER TABLE ONLY public.periodo ALTER COLUMN id_periodo SET DEFAULT nextval('public.periodo_id_periodo_seq'::regclass);
 A   ALTER TABLE public.periodo ALTER COLUMN id_periodo DROP DEFAULT;
       public          postgres    false    188    189    189                       2604    57810    preferencia_disciplina id    DEFAULT     �   ALTER TABLE ONLY public.preferencia_disciplina ALTER COLUMN id SET DEFAULT nextval('public.preferencia_disciplina_id_seq'::regclass);
 H   ALTER TABLE public.preferencia_disciplina ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    195    194    195                       2604    57836    turno id    DEFAULT     d   ALTER TABLE ONLY public.turno ALTER COLUMN id SET DEFAULT nextval('public.turno_id_seq'::regclass);
 7   ALTER TABLE public.turno ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    198    199    199                       2604    65862 
   usuario id    DEFAULT     h   ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);
 9   ALTER TABLE public.usuario ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    203    204            �          0    57825 
   dia_semana 
   TABLE DATA           5   COPY public.dia_semana (id, nome_semana) FROM stdin;
    public          postgres    false    197   �X       �          0    57771 
   disciplina 
   TABLE DATA           H   COPY public.disciplina (id, nome, id_periodo, id_professor) FROM stdin;
    public          postgres    false    191   AY       �          0    57863    disciplina_professor 
   TABLE DATA           A   COPY public.disciplina_professor (id, nome, periodo) FROM stdin;
    public          postgres    false    202   �Y       �          0    57841    disponibilidade_professor 
   TABLE DATA           X   COPY public.disponibilidade_professor (id, id_usuario, id_semana, id_turno) FROM stdin;
    public          postgres    false    201   �Y       �          0    57789    grade_horaria 
   TABLE DATA           X   COPY public.grade_horaria (id, id_disciplina, hora, id_periodo, dia_semana) FROM stdin;
    public          postgres    false    193   Z       �          0    49501    observacao_professor 
   TABLE DATA           V   COPY public.observacao_professor (id, atendido, id_professor, observacao) FROM stdin;
    public          postgres    false    187   �Z       �          0    49496    pedido_aluno 
   TABLE DATA           <   COPY public.pedido_aluno (id, atendido, pedido) FROM stdin;
    public          postgres    false    186   [       �          0    57763    periodo 
   TABLE DATA           ?   COPY public.periodo (id_periodo, periodo_semestre) FROM stdin;
    public          postgres    false    189   \[       �          0    57807    preferencia_disciplina 
   TABLE DATA           O   COPY public.preferencia_disciplina (id, id_disciplina, id_usuario) FROM stdin;
    public          postgres    false    195   �[       �          0    57833    turno 
   TABLE DATA           )   COPY public.turno (id, nome) FROM stdin;
    public          postgres    false    199   �[       �          0    65859    usuario 
   TABLE DATA           p   COPY public.usuario (id, cpf, senha, nome, papel, carga_horaria, email, telefone, cidade, id_papel) FROM stdin;
    public          postgres    false    204   \       �           0    0    dia_semana_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.dia_semana_id_seq', 1, false);
          public          postgres    false    196            �           0    0    disciplina_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.disciplina_id_seq', 1, false);
          public          postgres    false    190            �           0    0     disponibilidade_professor_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.disponibilidade_professor_id_seq', 1, false);
          public          postgres    false    200            �           0    0    grade_horaria_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.grade_horaria_id_seq', 1, false);
          public          postgres    false    192            �           0    0    hibernate_sequence    SEQUENCE SET     B   SELECT pg_catalog.setval('public.hibernate_sequence', 150, true);
          public          postgres    false    185            �           0    0    periodo_id_periodo_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.periodo_id_periodo_seq', 1, false);
          public          postgres    false    188            �           0    0    preferencia_disciplina_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.preferencia_disciplina_id_seq', 1, false);
          public          postgres    false    194            �           0    0    turno_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.turno_id_seq', 1, false);
          public          postgres    false    198            �           0    0    usuario_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuario_id_seq', 1, false);
          public          postgres    false    203                       2606    57830    dia_semana dia_semana_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.dia_semana
    ADD CONSTRAINT dia_semana_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.dia_semana DROP CONSTRAINT dia_semana_pkey;
       public            postgres    false    197                       2606    57776    disciplina disciplina_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.disciplina
    ADD CONSTRAINT disciplina_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.disciplina DROP CONSTRAINT disciplina_pkey;
       public            postgres    false    191            $           2606    57867 .   disciplina_professor disciplina_professor_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.disciplina_professor
    ADD CONSTRAINT disciplina_professor_pkey PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.disciplina_professor DROP CONSTRAINT disciplina_professor_pkey;
       public            postgres    false    202            "           2606    57846 8   disponibilidade_professor disponibilidade_professor_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.disponibilidade_professor
    ADD CONSTRAINT disponibilidade_professor_pkey PRIMARY KEY (id);
 b   ALTER TABLE ONLY public.disponibilidade_professor DROP CONSTRAINT disponibilidade_professor_pkey;
       public            postgres    false    201                       2606    57794     grade_horaria grade_horaria_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.grade_horaria
    ADD CONSTRAINT grade_horaria_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.grade_horaria DROP CONSTRAINT grade_horaria_pkey;
       public            postgres    false    193                       2606    49505 .   observacao_professor observacao_professor_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.observacao_professor
    ADD CONSTRAINT observacao_professor_pkey PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.observacao_professor DROP CONSTRAINT observacao_professor_pkey;
       public            postgres    false    187                       2606    49500    pedido_aluno pedido_aluno_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.pedido_aluno
    ADD CONSTRAINT pedido_aluno_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.pedido_aluno DROP CONSTRAINT pedido_aluno_pkey;
       public            postgres    false    186                       2606    57768    periodo periodo_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.periodo
    ADD CONSTRAINT periodo_pkey PRIMARY KEY (id_periodo);
 >   ALTER TABLE ONLY public.periodo DROP CONSTRAINT periodo_pkey;
       public            postgres    false    189                       2606    57812 2   preferencia_disciplina preferencia_disciplina_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.preferencia_disciplina
    ADD CONSTRAINT preferencia_disciplina_pkey PRIMARY KEY (id);
 \   ALTER TABLE ONLY public.preferencia_disciplina DROP CONSTRAINT preferencia_disciplina_pkey;
       public            postgres    false    195                        2606    57838    turno turno_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.turno
    ADD CONSTRAINT turno_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.turno DROP CONSTRAINT turno_pkey;
       public            postgres    false    199            &           2606    65864    usuario usuario_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            postgres    false    204            +           2606    57852 B   disponibilidade_professor disponibilidade_professor_id_semana_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.disponibilidade_professor
    ADD CONSTRAINT disponibilidade_professor_id_semana_fkey FOREIGN KEY (id_semana) REFERENCES public.dia_semana(id);
 l   ALTER TABLE ONLY public.disponibilidade_professor DROP CONSTRAINT disponibilidade_professor_id_semana_fkey;
       public          postgres    false    2078    201    197            ,           2606    57857 A   disponibilidade_professor disponibilidade_professor_id_turno_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.disponibilidade_professor
    ADD CONSTRAINT disponibilidade_professor_id_turno_fkey FOREIGN KEY (id_turno) REFERENCES public.turno(id);
 k   ALTER TABLE ONLY public.disponibilidade_professor DROP CONSTRAINT disponibilidade_professor_id_turno_fkey;
       public          postgres    false    199    2080    201            '           2606    57777    disciplina fk_perdisc    FK CONSTRAINT     �   ALTER TABLE ONLY public.disciplina
    ADD CONSTRAINT fk_perdisc FOREIGN KEY (id_periodo) REFERENCES public.periodo(id_periodo);
 ?   ALTER TABLE ONLY public.disciplina DROP CONSTRAINT fk_perdisc;
       public          postgres    false    189    2070    191            (           2606    57795 .   grade_horaria grade_horaria_id_disciplina_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.grade_horaria
    ADD CONSTRAINT grade_horaria_id_disciplina_fkey FOREIGN KEY (id_disciplina) REFERENCES public.disciplina(id);
 X   ALTER TABLE ONLY public.grade_horaria DROP CONSTRAINT grade_horaria_id_disciplina_fkey;
       public          postgres    false    193    191    2072            )           2606    57800 +   grade_horaria grade_horaria_id_periodo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.grade_horaria
    ADD CONSTRAINT grade_horaria_id_periodo_fkey FOREIGN KEY (id_periodo) REFERENCES public.periodo(id_periodo);
 U   ALTER TABLE ONLY public.grade_horaria DROP CONSTRAINT grade_horaria_id_periodo_fkey;
       public          postgres    false    193    2070    189            *           2606    57813 @   preferencia_disciplina preferencia_disciplina_id_disciplina_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.preferencia_disciplina
    ADD CONSTRAINT preferencia_disciplina_id_disciplina_fkey FOREIGN KEY (id_disciplina) REFERENCES public.disciplina(id);
 j   ALTER TABLE ONLY public.preferencia_disciplina DROP CONSTRAINT preferencia_disciplina_id_disciplina_fkey;
       public          postgres    false    2072    195    191            �   ;   x�3�vu�sq�us�r�2�q:��s�:���&@���k
����qqq :i�      �   �   x��1�0@��9�/ j(Hd�ِ��X$@�*FN,ԡ��HY��g�
]�uf$ƘKʌE?QXp�8J�*�!b��=��Y7w��	����$�瑟�K�ܼ��B�C'n���}o��(      �      x������ � �      �      x�3�4�4�4�2�@����� j�      �   �   x�e�K� ���e/��*f$�餉��܏sc�mU����Up��`J����sr4ւƠ�y�Mz.i�jsK�y<}HK���s��uO�=�*-U��������6po$$[�;-��b����1��:�      �   b   x�3�,�4��;�8_��4�(_!%�H!�4'�X!/Q�8��$�˘3���ĢD�|����T.C�Y����+'&%��s��ɗ���$�d�%r��qqq -�      �   .   x�34��,�,MTHTuuW(HM/MU�-�,�WH�O������ ӂ
�      �   R   x�3�(��M�,��2�NM/�K��2�I-J�p�&��s��y@�PY�6�>��$37�˂�?�$�,�+F��� .~7      �      x�3�44�4�2��1z\\\ �@      �   (   x�3�sp
����2���	����ua�1z\\\ 9�-      �   |   x�������\���������"΀ 7��`� NμҜ|8��i�e�in`dbaif`ja����������؀�"蒚�������������ifdiianjbfl�鞟yxQ^&��=... ��(�     