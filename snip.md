# SNIPPETS OF EACH FUNCTION
-----------------------------------

# VIEW - Generate multiple pose roll 16 views, 19:24:45/19:27:45 | 3 mins

!python run_view.py --gpu_ids 0 --model viewer --output_dir ./outputs/results/  --src_path      ./assets/src_imgs/internet/men1_256.jpg  --bg_ks 13  --ft_ks 3 --has_detector  --post_tune --front_warp --bg_replace --save_res --ip  http://51cb7644.ngrok.io --port 80

## Custom images

!python run_view.py --gpu_ids 0 --model viewer --output_dir ./outputs/results/  --src_path   /content/try.png   --bg_ks 13  --ft_ks 3 --has_detector  --post_tune --front_warp --bg_replace --save_res --ip  http://51cb7644.ngrok.io --port 80

-----------------------------------

# SWAP - Full humans

!python run_swap.py --gpu_ids 0 --model imitator --output_dir ./outputs/results/ --src_path      ./assets/src_imgs/imper_A_Pose/024_8_2_0000.jpg  --tgt_path      ./assets/src_imgs/fashion_man/Sweatshirts_Hoodies-id_0000680701_4_full.jpg  --bg_ks 13  --ft_ks 3 --has_detector  --post_tune  --front_warp --swap_part body  --save_res --ip http://51cb7644.ngrok.io --port 80


## Custom images

## OG w/ Ranbir OKAY

!python run_swap.py --gpu_ids 0 --model imitator --output_dir ./outputs/results/ --src_path      ./assets/src_imgs/imper_A_Pose/024_8_2_0000.jpg  --tgt_path     /content/CwrJ_NaW8AA6qOE.jpg  --bg_ks 13  --ft_ks 3 --has_detector  --post_tune  --front_warp --swap_part body  --save_res --ip http://51cb7644.ngrok.io --port 80

## Messi w/ Ranbir REKT

!python run_swap.py --gpu_ids 0 --model imitator --output_dir ./outputs/results/ --src_path  /content/Messi.jpg  --tgt_path     /content/try.png  --bg_ks 13  --ft_ks 3 --has_detector  --post_tune  --front_warp --swap_part body  --save_res --ip http://51cb7644.ngrok.io --port 80


-----------------------------------

# IMITATOR

Takes 30 mins

# OG

!python run_imitator.py --gpu_ids 0 --model imitator --output_dir ./outputs/results/  \
--src_path      ./assets/src_imgs/fashion_woman/Sweaters-id_0000088807_4_full.jpg    \
--tgt_path      ./assets/samples/refs/iPER/024_8_2    \
--bg_ks 25  --ft_ks 3 \
--has_detector  --post_tune  \
--save_res  --ip http://51cb7644.ngrok.io --port 80


# Custom Ranbir 1500 seconds=>1 25mins for generating frames for motion

!python run_imitator.py --gpu_ids 0 --model imitator --output_dir ./outputs/results/  \
--src_path      /content/try.png    \
--tgt_path      ./assets/samples/refs/iPER/024_8_2    \
--bg_ks 25  --ft_ks 3 \
--has_detector  --post_tune  \
--save_res  --ip http://51cb7644.ngrok.io --port 80